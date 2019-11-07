import { Injectable } from '@angular/core';
import {ApplicationProperties} from './application-properties';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicationPropertiesService {

  get(): Observable<ApplicationProperties> {
    const properties: ApplicationProperties = {
      restUrl: ''
    };

    return of(properties).pipe(delay(1000));
  }
}
