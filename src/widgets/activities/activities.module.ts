import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivityWidgetComponent } from './activity-widget/activity-widget.component';
import { ActivitiesService } from './activities.service';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
  declarations: [ActivitiesListComponent, ActivityWidgetComponent, ActivityComponent],
  exports: [ActivitiesListComponent],
  entryComponents: [ActivitiesListComponent, ActivityWidgetComponent],
  imports: [CommonModule],
  providers: [
    {
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: (activitiesService: ActivitiesService) => {
        return () => activitiesService.startFetching();
      },
      deps: [ActivitiesService]
    }
  ]
})
export class ActivitiesModule { }
