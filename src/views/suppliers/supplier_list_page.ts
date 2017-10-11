import {bindable} from 'aurelia-framework';

export class SupplierListPage {
  @bindable value;

  public supplier_list_special = [
    {name: "Supplier name", rating: 4, reviews: 18, desc: "AAA"},
    {name: "Supplier name", rating: 4, reviews: 18, desc: "AAA"},
    {name: "Supplier name", rating: 4, reviews: 18, desc: "AAA"}
  ];

  public supplier_list = [
    {name: "Supplier name", rating: 4, reviews: 18, desc: "AAA"},
    {name: "Supplier name", rating: 4, reviews: 18, desc: "AAA"},
    {name: "Supplier name", rating: 4, reviews: 18, desc: "AAA"},
    {name: "Supplier name", rating: 4, reviews: 18, desc: "AAA"},
    {name: "Supplier name", rating: 4, reviews: 18, desc: "AAA"},
    {name: "Supplier name", rating: 4, reviews: 18, desc: "AAA"},
    {name: "Supplier name", rating: 4, reviews: 18, desc: "AAA"},
    {name: "Supplier name", rating: 4, reviews: 18, desc: "AAA"},
    {name: "Supplier name", rating: 4, reviews: 18, desc: "AAA"},
    {name: "Supplier name", rating: 4, reviews: 18, desc: "AAA"},
    {name: "Supplier name", rating: 4, reviews: 18, desc: "AAA"},
    {name: "Supplier name", rating: 4, reviews: 18, desc: "AAA"}
  ];

  valueChanged(newValue, oldValue) {

  }
}

