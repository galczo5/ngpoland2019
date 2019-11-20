import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './message';
import { InboxHttpClient } from './inbox-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(private readonly httpClient: InboxHttpClient) { }

  fetch(): Observable<Message[]> {
    return this.httpClient.get('api/messages');
  }
}
