import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlistComponent } from './smodule/slist/slist.component';
import { CustomerComponent } from './smodule/customer/customer.component';
import { ProductComponent } from './smodule/product/product.component';
import { OrderComponent } from './smodule/order/order.component';
import { SupplierComponent } from './smodule/supplier/supplier.component';

const routes: Routes = [
  {path: 'slist', component:SlistComponent},
  {path: 'customer', component:CustomerComponent},
  {path: 'product', component:ProductComponent},
  {path: 'order', component:OrderComponent},
  {path: 'supplier', component:SupplierComponent},
  {path: "", redirectTo: "slist", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
