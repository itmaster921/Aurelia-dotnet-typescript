import {bindable} from 'aurelia-framework';
import { autoinject } from "aurelia-framework";
import { Router } from 'aurelia-router';

@autoinject
export class Success {
  @bindable value;

  public router: Router;

  constructor(private routerClass: Router) {
    this.router = routerClass;
  }

  private redirectToURL() {
    this.router.navigate('buyers/profile/new');
  }
  valueChanged(newValue, oldValue) {

  }
}