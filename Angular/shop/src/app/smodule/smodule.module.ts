import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlistComponent } from './slist/slist.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RootComponent } from '../root/root.component';



@NgModule({
  declarations: [
    SlistComponent,
    CustomerComponent,
    SupplierComponent,
    ProductComponent,
    OrderComponent,
    RootComponent
  ],
  imports: [
    CommonModule,BrowserModule,AppRoutingModule
  ],providers:[],bootstrap:[RootComponent]
})
export class SmoduleModule { }
