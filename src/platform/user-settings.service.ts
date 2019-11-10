import {Injectable} from '@angular/core';
import {UserSettings} from './user-settings';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {Widget} from './widget';

@Injectable()
export class UserSettingsService {

  get(): Observable<UserSettings> {
    const item = localStorage.getItem('widget');
    return of({
      enabledWidget: item === 'activities' ? Widget.ACTIVITIES : Widget.NEWS
    }).pipe(delay(3500));
  }
}
