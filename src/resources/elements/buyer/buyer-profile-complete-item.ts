import {bindable} from 'aurelia-framework';
import {BuyerDashboard} from "./../../../views/buyers/home/dashboard";
import {inject} from "aurelia-framework";

@inject(BuyerDashboard)

export class BuyerProfileCompleteItem {
  @bindable value;
  
  constructor(private parent: BuyerDashboard) {
    
  }

  handleSaveProfile() {
    this.parent.flagProfileSaved = true;
  }

  valueChanged(newValue, oldValue) {

  }
}

