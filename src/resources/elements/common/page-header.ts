import {bindable, inject, customElement} from 'aurelia-framework';
import * as $ from 'jquery';
// import $ from 'jquery-ui';
// import 'select2';
// import 'select2/css/select2.css!'
// import 'bootstrap';

@customElement('page-header')
export class PageHeader {
  @bindable name;

  constructor (parent) {
      
  }

  valueChanged(newValue, oldValue) {
  }

  welcome1() {
              
      return true;
  }

  attached () {
    
    $('.navbar-toggle').click(function(){
        $('.navbar-collapse').toggleClass('right');
        $('.navbar-toggle').toggleClass('indexcity');

    });

    // $(document).ready(function() {
    //   console.log("ready!");
    // });
  }
}
