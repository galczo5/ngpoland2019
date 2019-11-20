import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InboxHttpClient {

  get(url: string): Observable<any> {
    return of([{
      from: 'Alex Smith',
      subject: 'New test scenarios',
      text: 'Hi, here you have...',
      count: 2
    }, {
      from: 'John Kowalski',
      subject: 'Deployment date?',
      text: 'John, what is planned date of...',
      count: 1
    }, {
      from: 'John Kowalski',
      subject: 'Version 1.1.2 backlog and roadmap',
      text: 'Guys, check out our backlog...',
      count: 12
    }, {
      from: 'Alex Smith',
      subject: 'New version of news widget',
      text: '',
      count: 3
    }, {
      from: 'Shannon Lee',
      subject: 'Party invitation',
      text: 'Shannon invites you to party...',
      count: 1
    }, {
      from: 'Admin',
      subject: 'Your account is active now',
      text: 'Your account is active now...',
      count: 1
    }]).pipe(delay(1500));
  }
}
