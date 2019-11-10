import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {BrowserModule} from '@angular/platform-browser';
import {ConfigurationModule} from './configuration/configuration.module';

@NgModule({
  imports: [
    BrowserModule,
    ConfigurationModule
  ],
  declarations: [HeaderComponent],
  bootstrap: [HeaderComponent]
})
export class HeaderModule { }
