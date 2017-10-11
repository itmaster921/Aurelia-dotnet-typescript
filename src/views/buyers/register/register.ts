import {bindable} from 'aurelia-framework';

export class Register {
  @bindable value;
  optionValues = ['Invest'];
  valueChanged(newValue, oldValue) {

  }
}