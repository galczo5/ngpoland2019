import { Injectable } from '@angular/core';
import { Widget } from './widget';

@Injectable()
export class UserSettingsStoreService {

  private state: Widget = Widget.NEWS;

  setWidget(type: Widget): void {
    this.state = type;
  }

  getWidget(): Widget {
    return this.state;
  }
}
