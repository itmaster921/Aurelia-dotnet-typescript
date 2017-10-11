import {bindable} from 'aurelia-framework';

export class BuyerDashboardHintItem {
  @bindable value;

  hintlist = [
    {desc: "Article headline lorem ipsum dolor"},
    {desc: "Article headline lorem ipsum dolor"},
    {desc: "Article headline lorem ipsum dolor"},
    {desc: "Article headline lorem ipsum dolor"},
    {desc: "Article headline lorem ipsum dolor"},
    {desc: "Article headline lorem ipsum dolor"}
  ];

  valueChanged(newValue, oldValue) {

  }

}

