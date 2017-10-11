import {bindable, inject} from 'aurelia-framework';
import {SupplierListPage} from './../../../views/suppliers/supplier_list_page';
import {SupplierDashboardPage} from './../../../views/suppliers/supplier_dashboard_page';

@inject(SupplierListPage, SupplierDashboardPage)
export class SupplierList {
  @bindable itemCols = 3;
  @bindable itemComponent = "supplier-item";
  @bindable additionalClass = "";
  showlist = [];
  showlistSpecial = [];

  constructor (SupplierListPage, SupplierDashboardPage) {
    if(this.itemComponent == "supplier-item")
    {
      this.showlistSpecial = SupplierListPage.supplier_list_special;
      
      this.showlist = SupplierListPage.supplier_list;
      
    }
    else if(this.itemComponent == "supplier-article-edititem")
    {  
      this.showlist = SupplierDashboardPage.supplier_article_editlist;
    }
    
  }
  
  valueChanged(newValue, oldValue) {
  }
}