import { Injectable } from '@angular/core';
import { NewsHttpClient } from './http/http-client.service';
import { Observable, ReplaySubject, interval } from 'rxjs';
import { News } from './news';
import { switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private news$: ReplaySubject<News[]> = new ReplaySubject<News[]>();

  constructor(private httpClient: NewsHttpClient) {}

  startFetching(): void {
    interval(2000)
      .pipe(
        switchMap(() => this.httpClient.get(''))
      )
      .subscribe(news => {
        this.news$.next(news);
      });
  }

  get(): Observable<News[]> {
    return this.news$.asObservable();
  }

}
