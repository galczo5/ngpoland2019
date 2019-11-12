import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { GDPRModule } from '../gdpr/gdpr.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GDPRModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
