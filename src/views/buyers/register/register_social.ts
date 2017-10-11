import { bindable } from 'aurelia-framework';
import { autoinject } from "aurelia-framework";
import { Router } from 'aurelia-router';
import UserService from './../../../services/users/user';
import UserInfo from './../../../models/userInfo';
import 'whatwg-fetch';
import * as crypto from "crypto-js";

@autoinject
export class RegisterSocial {

    @bindable value;
    inputValue = {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      confirmEmail: ''
    };

    public router: Router;
    public userInfo: UserInfo = new UserInfo();
    public registerService: UserService;

    constructor(private registerServices: UserService, private routerClass: Router) {
      this.registerService = registerServices;
      this.router = routerClass;
    }

    public activate() {
      
    }

    private bindInputValues() {
      if ( this.inputValue.email != this.inputValue.confirmEmail ) {
        alert("email not matched!")
        return false;
      }
      this.userInfo.email = this.inputValue.email;
      this.userInfo.firstName = this.inputValue.firstName;
      this.userInfo.lastName = this.inputValue.lastName;
      this.userInfo.password = crypto.SHA1(this.inputValue.password).toString();
    }

    private convertToFormData() {
      var form = new FormData();
      form.append('firstName', this.userInfo.firstName);
      form.append('lastName', this.userInfo.lastName);
      form.append('email', this.userInfo.email);
      form.append('password', this.userInfo.password);
      form.append('callbackUrlTemplate', this.userInfo.callbackUrlTemplate);
      return form;
    }

    private handleSignUp() {
      this.bindInputValues();
      var userInfo = this.convertToFormData();
      return this.registerService.signUp(userInfo).then(response => {
        if(response == 200)
          this.router.navigate('buyers/verify');
      });
    }
}