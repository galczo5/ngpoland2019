import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news-list/news-list.component';
import {NewsService} from './news.service';
import {NewsWidgetComponent} from './news-widget/news-widget.component';

@NgModule({
  declarations: [NewsComponent, NewsListComponent, NewsWidgetComponent],
  exports: [NewsListComponent],
  entryComponents: [NewsListComponent, NewsWidgetComponent],
  imports: [CommonModule],
  providers: [
    {
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: (service: NewsService) => {
        return () => service.fetchNews();
      },
      deps: [NewsService]
    }
  ]
})
export class NewsModule { }
