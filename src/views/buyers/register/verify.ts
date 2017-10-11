import { bindable } from 'aurelia-framework';
import { autoinject } from "aurelia-framework";
import { Router } from 'aurelia-router';
import UserService from './../../../services/users/user';
import UserInfo from './../../../models/userInfo';
import 'whatwg-fetch';
import * as crypto from "crypto-js";

@autoinject
export class Verify {
  @bindable value;
  inputValue = {
      email: '',
      token: ''
    };

  public router: Router;
  public registerService: UserService;
  
  constructor(private registerServices: UserService, private routerClass: Router) {
    this.registerService = registerServices;
    this.router = routerClass;
  }

  public activate() {
      
  }
  
  private convertToFormData() {
    var form = new FormData();
    form.append('email', this.inputValue.email);
    form.append('token', this.inputValue.token);
    return form;
  }

  private verfiyEmail() {
    var data = this.convertToFormData();
    return this.registerService.verify(data).then(response => {
        if(response == 200)
          this.router.navigate('buyers/success');
      });
  }

  valueChanged(newValue, oldValue) {

  }
}