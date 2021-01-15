import { Module, Mutation, Action, VuexModule } from 'vuex-module-decorators';
import { ElementInterface } from '@/interfaces/Element';

@Module
export default class Elements extends VuexModule {
  searchString = '';

  @Mutation
  updateSearchString(payload: string) {
    this.searchString = payload;
  }

  @Action
  async onSearchStringChange(payload: string) {
    await this.context.commit('updateSearchString', payload);
  }

  primaryList: Array<ElementInterface> = [];
  secondaryList: Array<ElementInterface> = [];

  get returnPrimaryList() {
    return this.primaryList;
  }

  get returnSecondaryList() {
    return this.secondaryList;
  }

  get primaryListItemsToShow() {
    if (this.searchString.length > 0) {
      const re = new RegExp(this.searchString, 'g');
      const findOccurrences = (i: ElementInterface) => [i.name, ...i.items.map(i => i.name)].join(' ').match(re);
      const newArray = this.primaryList.map(i => {
        const occurrences = findOccurrences(i);
        i.occurrences = occurrences === null ? 0 : occurrences.length;
        return i;
      });
      const filtered = newArray.filter(i => i.occurrences > 0);
      return filtered.length > 0 ? filtered.sort((a, b) => b.occurrences - a.occurrences) : [];
    } else {
      return this.primaryList;
    }
  }

  get secondaryListItemsToShow() {
    return this.secondaryList;
  }

  @Mutation
  setPrimaryList(payload: Array<ElementInterface>) {
    this.primaryList = payload;
  }

  @Mutation
  pushToPrimaryList(element: ElementInterface) {
    this.primaryList.push(element);
  }

  @Mutation
  removeFromPrimaryList(index: number) {
    this.primaryList.splice(index, 1);
  }

  @Mutation
  pushToSecondaryList(element: ElementInterface) {
    this.secondaryList.push(element);
  }

  @Mutation
  removeFromSecondaryList(index: number) {
    this.secondaryList.splice(index, 1);
  }

  @Action
  async fetchElements() {
    const URL = `${window.location.origin}:3000/elements`;
    const fetchParams = { method: 'GET' };
    await fetch(URL, fetchParams)
      .then(res => res.json())
      .then(data => this.context.commit('setPrimaryList', data))
      .catch(err => console.log(err));
  }

  @Action
  async onElementAddition(elementId: string) {
    const elementIndex = this.returnPrimaryList.findIndex(i => i.id === elementId);
    const element = this.returnPrimaryList[elementIndex];
    await this.context.commit('pushToSecondaryList', element);
    await this.context.commit('removeFromPrimaryList', elementIndex);
    await this.context.dispatch('onListChange', { element: element, operationType: 'addition' });
  }

  @Action
  async onElementDeletion(elementId: string) {
    const elementIndex = this.returnSecondaryList.findIndex(i => i.id === elementId);
    const element = this.returnSecondaryList[elementIndex];
    await this.context.commit('pushToPrimaryList', element);
    await this.context.commit('removeFromSecondaryList', elementIndex);
    await this.context.dispatch('onListChange', { element: element, operationType: 'deletion' });
  }
}
