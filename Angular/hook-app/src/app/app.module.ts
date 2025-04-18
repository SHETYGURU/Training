import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppParentComponent } from './app-parent/app-parent.component';
import { AppChildComponent } from './app-child/app-child.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    AppParentComponent,
    AppChildComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
