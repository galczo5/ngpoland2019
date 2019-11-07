import { Injectable } from '@angular/core';
import {HttpClient} from './http/http-client.service';
import {Observable, ReplaySubject} from 'rxjs';
import {News} from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private news$: ReplaySubject<News[]> = new ReplaySubject<News[]>();

  constructor(private httpClient: HttpClient) {}

  fetchNews(): void {
    const news = this.httpClient.get('');
    this.news$.next(news);
  }

  getNews(): Observable<News[]> {
    return this.news$.asObservable();
  }

}
