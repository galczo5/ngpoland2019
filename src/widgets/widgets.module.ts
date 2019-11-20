import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { ActivityWidgetComponent } from './activities/activity-widget/activity-widget.component';
import { NewsWidgetComponent } from './news/news-widget/news-widget.component';
import { BrowserModule } from '@angular/platform-browser';
import { NewsModule } from './news/news.module';
import { ActivitiesModule } from './activities/activities.module';
import { UserSettingsStoreService } from '../platform/user-settings-store.service';
import { Widget } from '../platform/widget';

@NgModule({
  imports: [
    BrowserModule,
    NewsModule,
    ActivitiesModule
  ]
})
export class WidgetsModule implements DoBootstrap {

  constructor(private readonly storeService: UserSettingsStoreService) {}


  // CODE EXAMPLE BELOW
  ngDoBootstrap(appRef: ApplicationRef): void {
    const widget = this.storeService.getWidget();
    if (widget === Widget.NEWS) {
      appRef.bootstrap(NewsWidgetComponent);
    } else if (widget === Widget.ACTIVITIES) {
      appRef.bootstrap(ActivityWidgetComponent);
    }
  }
  // CODE EXAMPLE ABOVE


}
