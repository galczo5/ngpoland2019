import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Message } from './message';
import { InboxService } from './inbox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  messages: Message[] = [];

  constructor(private readonly viewContainerRef: ViewContainerRef,
              private readonly inboxService: InboxService) {}

  ngOnInit(): void {
    this.inboxService.fetch()
      .subscribe(messages => this.messages = messages);
  }
}
