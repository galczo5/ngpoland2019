import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './activities-list/activities-list.component';

@NgModule({
  declarations: [ActivitiesListComponent],
  exports: [
    ActivitiesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ActivitiesModule { }
