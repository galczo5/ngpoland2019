import { BrowserModule } from '@angular/platform-browser';
import {
  APP_BOOTSTRAP_LISTENER,
  ComponentFactoryResolver,
  ComponentRef,
  NgModule,
  ViewContainerRef
} from '@angular/core';

import { AppComponent } from './app.component';
import { GDPRModule } from '../gdpr/gdpr.module';
import {ModalComponent} from '../gdpr/modal/modal.component';

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
