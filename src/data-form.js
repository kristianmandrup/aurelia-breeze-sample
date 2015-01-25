import {Behavior} from 'aurelia-framework';

export class DataForm {
  static metadata(){ return Behavior.withProperty('entity', 'entityChanged'); } //, Behavior.withProperty('submit')]; }

  constructor() {
    this.dataProperties = [];
  }

  entityChanged() {
    if (this.entity) {
      this.dataProperties = this.entity.entityType.getProperties().filter(p => p.isDataProperty);
      //this.dataProperties.foreach(p => p.test = 'form-control');
    } else {
      this.dataProperties = [];
    }
  }
}