import {bindable} from 'aurelia-framework';
// import {BuyerProfileCompleteItem} from './../../../resources/elements/buyer/buyer-profile-complete-item';
// import {inject} from 'aurelia-framework';

// @inject(BuyerProfileCompleteItem)
export class BuyerDashboard {
  @bindable value;
  tabStatus = 0;
  flagCompleteProfile = false;
  flagCompleteProperty = false;
  flagProfileSaved = false;
  hasFocus = false;  
  constructor() {
    // console.log(BuyerProfileCompleteItem);
  }

  showPage(index, $event) {
    this.tabStatus = index;
    // $event.target.
  }

  handleButtonCompleteProfile() {
    this.flagCompleteProfile = true;
    this.hasFocus = true;
  }

  handleButtonPropertyView() {
    this.flagCompleteProperty = true;
  }
  valueChanged(newValue, oldValue) {

  }
}