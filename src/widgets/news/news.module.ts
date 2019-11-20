import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsService } from './news.service';
import { NewsWidgetComponent } from './news-widget/news-widget.component';
import { take } from 'rxjs/operators';

@NgModule({
  declarations: [NewsComponent, NewsListComponent, NewsWidgetComponent],
  exports: [NewsListComponent],
  entryComponents: [NewsListComponent, NewsWidgetComponent],
  imports: [CommonModule],
  providers: [


    // CODE EXAMPLE BELOW
    {
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: (service: NewsService) => {

        return () => {
          service.startFetching();
          return service.get()
            .pipe(take(1))
            .toPromise();
        };

      },
      deps: [NewsService]
    }
    // CODE EXAMPLE ABOVE


  ]
})
export class NewsModule {}
