import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import {ActivityWidgetComponent} from './activity-widget/activity-widget.component';

@NgModule({
  declarations: [ActivitiesListComponent, ActivityWidgetComponent],
  exports: [ActivitiesListComponent],
  entryComponents: [ActivitiesListComponent, ActivityWidgetComponent],
  imports: [CommonModule]
})
export class ActivitiesModule { }
