import {bindable} from 'aurelia-framework';

export class SupplierDashboardPage {
  @bindable value;

  public supplier_article_editlist = [
    {caption: "Article headline lorem ipsum dolor sit amet consectetur", views: 184, favorites: 29, shares: 8},
    {caption: "Article headline1 lorem ipsum dolor sit amet consectetur", views: 184, favorites: 29, shares: 8},
    {caption: "Article headline2 lorem ipsum dolor sit amet consectetur", views: 184, favorites: 29, shares: 8},
    {caption: "Article headline3 lorem ipsum dolor sit amet consectetur", views: 184, favorites: 29, shares: 8},
    {caption: "Article headline4 lorem ipsum dolor sit amet consectetur", views: 184, favorites: 29, shares: 8},
    {caption: "Article headline5 lorem ipsum dolor sit amet consectetur", views: 184, favorites: 29, shares: 8},
    {caption: "Article headline6 lorem ipsum dolor sit amet consectetur", views: 184, favorites: 29, shares: 8},
    {caption: "Article headline7 lorem ipsum dolor sit amet consectetur", views: 184, favorites: 29, shares: 8},
    {caption: "Article headline8 lorem ipsum dolor sit amet consectetur", views: 184, favorites: 29, shares: 8}
    
  ];

  constructor() {
  }

  valueChanged(newValue, oldValue) {

  }
}

