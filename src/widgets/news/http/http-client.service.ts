import { Injectable } from '@angular/core';
import {News} from '../news';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsHttpClient {

  constructor() { }

  get(url: string): Observable<any> {
    return of([{
        header: 'New Employees!',
        text: 'Please welcome new employees: Anna and John. ' +
          'They will join us as developers in frontend team'
      }, {
        header: 'Beer fridays - next friday',
        text: 'Beer for everybody this friday in our kitchen. We will start at 16:00.'
      }, {
        header: 'Task board app update',
        text: 'Task board was updated this night. Check out new features. If you find any bug or performance issue please contact us ASAP.',
        important: true
      }, {
        header: 'Phone found',
        text: `I've found phone in bathroom. Golden Samsung S7. Alex Smith`
      }, {
        header: 'New version of news widget',
        text: `Version 1.3 was deployed last night`
      }, {
        header: 'Ready for party?',
        text: 'Join us at company party next friday'
      }
    ]);
  }
}
