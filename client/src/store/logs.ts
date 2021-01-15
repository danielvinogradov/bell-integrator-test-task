import { Module, Mutation, Action, VuexModule } from 'vuex-module-decorators';
import { ElementInterface } from '@/interfaces/Element';

class Log {
  element: ElementInterface;
  operationType: 'addition' | 'deletion';
  time: Date;

  constructor(element: ElementInterface, operationType: 'addition' | 'deletion') {
    this.element = element;
    this.operationType = operationType;
    this.time = new Date();
  }
}

interface LogPayloadInterface {
  element: ElementInterface;
  operationType: 'addition' | 'deletion';
}

@Module
export default class Logs extends VuexModule {
  logs: Array<Log> = [];

  get returnLogs() {
    return this.logs;
  }

  get returnAdditionLogs() {
    return this.logs.filter(i => i.operationType === 'addition');
  }

  get returnDeletionLogs() {
    return this.logs.filter(i => i.operationType === 'deletion');
  }

  @Mutation
  createNewLog(payload: LogPayloadInterface) {
    this.logs.push(new Log(payload.element, payload.operationType));
  }

  @Action
  async onListChange(payload: LogPayloadInterface) {
    await this.context.commit('createNewLog', payload);
  }
}
