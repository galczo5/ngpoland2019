import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesHttpClient {

  get(url: string): Observable<any> {
    return of([{
      date: new Date('2019-11-10'),
      header: 'Deployment date',
      text: 'Deployment date has changed',
      subtext: 'Author of change: John Doe'
    }, {
      date: new Date('2019-11-12'),
      header: 'Production release',
      text: 'Production release is prepared to deploy',
      subtext: 'Author of change: Alex Smith'
    }, {
      date: new Date('2019-11-14'),
      header: 'Hotfix in progress',
      text: 'Hotfix to version 1.1.1 has started',
      subtext: 'Author of change: John Doe'
    }, {
      date: new Date('2019-11-16'),
      header: 'Hotfix done',
      text: 'Hotfix to version 1.1.1 done',
      subtext: 'Author of change: John Doe'
    }, {
      date: new Date('2019-11-16'),
      header: 'Customer feedback report',
      text: 'New customer feedback report available',
      subtext: 'Author of change: John Doe'
    }]).pipe(delay(1000));
  }
}
