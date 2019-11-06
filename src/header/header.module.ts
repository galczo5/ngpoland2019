import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [HeaderComponent],
  bootstrap: [HeaderComponent]
})
export class HeaderModule { }
