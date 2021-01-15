<template lang="pug">
  section.elementsLists
    div.elementsLists__itemContainer
      h2.elementsLists__heading Primary List
      ul.elementsLists__item(v-if="$store.getters.primaryListItemsToShow.length > 0")
        elements-list-item(v-for="element in $store.getters.primaryListItemsToShow" :key="element.id" :element="element")
          app-button(@click="() => $store.dispatch('onElementAddition', element.id)") Добавить +
      p(v-else) Элементы отсутствуют
    div.elementsLists__itemContainer
      h2.elementsLists__heading Secondary List
      ul.elementsLists__item(v-if="$store.getters.secondaryListItemsToShow.length > 0")
        elements-list-item(v-for="element in $store.getters.secondaryListItemsToShow" :key="element.id" :element="element")
          app-button(@click="() => $store.dispatch('onElementDeletion', element.id)") Удалить -
      p(v-else) Элементы отсутствуют
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ElementsListItem from '@/components/ElementsListItem.vue';
import AppButton from '@/components/AppButton.vue';

@Component({
  components: { ElementsListItem, AppButton },
})
export default class ElementsLists extends Vue {

}
</script>

<style scoped lang="stylus">
.elementsLists
  display flex
  align-items flex-start
  justify-content space-between

.elementsLists__itemContainer
  width 48%

.elementsLists__item
  margin 0
  padding 0
  list-style none
</style>
