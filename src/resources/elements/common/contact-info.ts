import {bindable} from 'aurelia-framework';

export class ContactInfo {
  @bindable checked = false;
  @bindable infoType = "Primary Contact";
  @bindable showRating = true;
  @bindable showSocialNet = true;

  valueChanged(newValue, oldValue) {

  }
}

