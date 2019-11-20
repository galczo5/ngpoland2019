import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [FooterComponent],
  bootstrap: [FooterComponent],
  imports: [
    BrowserModule
  ]
})
export class FooterModule { }
