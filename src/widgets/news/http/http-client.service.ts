import { Injectable } from '@angular/core';
import {News} from '../news';

@Injectable({
  providedIn: 'root'
})
export class HttpClient {

  constructor() { }

  get(url: string): any {
    const result: News[] = [{
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
      }
    ];

    return result;
  }
}
