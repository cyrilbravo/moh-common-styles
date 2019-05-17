import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PasswordDemoComponent } from '../components/password-demo/password-demo.component';
import { AddressDemoComponent } from '../components/address-demo/address-demo.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedCoreModule } from 'moh-common-lib';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PasswordDemoComponent,
    AddressDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedCoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
