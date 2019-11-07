import {Injectable} from '@angular/core';
import {UserSettings} from './user-settings';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {Widget} from './widget';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  get(): Observable<UserSettings> {
    const settings: UserSettings = {
      enabledWidget: Widget.NEWS
    };

    return of(settings).pipe(delay(3500));
  }
}
