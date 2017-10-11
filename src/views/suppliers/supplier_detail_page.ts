import {bindable} from 'aurelia-framework';

export class SupplierDetailPage {
  @bindable value;

  constructor(parent) {
    console.log('REAL CONSTRUCTOR');
  }

  valueChanged(newValue, oldValue) {

  }
}

