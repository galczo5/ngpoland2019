import {ApplicationRef, DoBootstrap, NgModule} from '@angular/core';
import { ActivityWidgetComponent } from './activity-widget/activity-widget.component';
import { NewsWidgetComponent } from './news-widget/news-widget.component';
import {BrowserModule} from '@angular/platform-browser';
import {NewsModule} from './news/news.module';
import {ActivitiesModule} from './activities/activities.module';

@NgModule({
  declarations: [ActivityWidgetComponent, NewsWidgetComponent],
  entryComponents: [ActivityWidgetComponent, NewsWidgetComponent],
  imports: [
    BrowserModule,
    NewsModule,
    ActivitiesModule
  ]
})
export class WidgetsModule implements DoBootstrap {

  ngDoBootstrap(appRef: ApplicationRef): void {
    // appRef.bootstrap(NewsWidgetComponent);
    appRef.bootstrap(ActivityWidgetComponent);
  }

}
