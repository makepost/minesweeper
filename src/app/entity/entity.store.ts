import { merge } from 'lodash';
import { action, observable } from 'mobx-angular';

export class EntityStore {
  @observable
  public entities = {};

  public static get() {
    return entityStore;
  }

  @action
  public set(entities: any) {
    merge(this.entities, entities);
  }
}

const entityStore = new EntityStore();

// Expose for debug.
(window as any).entities = entityStore.entities;
