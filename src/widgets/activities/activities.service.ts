import { Injectable } from '@angular/core';
import {interval, Observable, ReplaySubject} from 'rxjs';
import {Activity} from './activity';
import {ActivitiesHttpClient} from './http/http-client.service';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private activities$: ReplaySubject<Activity[]> = new ReplaySubject<Activity[]>();

  constructor(private readonly httpClient: ActivitiesHttpClient) { }

  fetch(): void {
    interval(3000)
      .pipe(
        switchMap(() => this.httpClient.get(''))
      )
      .subscribe(activities => {
        this.activities$.next(activities);
      });
  }

  get(): Observable<Activity[]> {
    return this.activities$.asObservable();
  }
}
