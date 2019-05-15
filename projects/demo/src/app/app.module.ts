import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PasswordDemoComponent} from '../components/password-demo/password-demo.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedCoreModule } from 'moh-common-lib';

@NgModule({
  declarations: [
    AppComponent,
    PasswordDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
