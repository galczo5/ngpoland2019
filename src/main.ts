import {enableProdMode, PLATFORM_INITIALIZER, PlatformRef} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { AppModule } from './app/app.module';
import { HeaderModule } from './header/header.module';
import {FooterModule} from './footer/footer.module';
import {WidgetsModule} from './widgets/widgets.module';
import {ApplicationPropertiesService} from './platform/application-properties.service';
import {UserSettingsService} from './platform/user-settings.service';
import {combineLatest} from 'rxjs';

import './utils';

if (environment.production) {
  enableProdMode();
}

const platformRef = platformBrowserDynamic([
  { provide: ApplicationPropertiesService, useClass: ApplicationPropertiesService, deps: [] },
  { provide: UserSettingsService, useClass: UserSettingsService, deps: [] },
  {
    multi: true,
    provide: PLATFORM_INITIALIZER,
    useFactory: (applicationPropertiesService: ApplicationPropertiesService, settingsService: UserSettingsService) => {
      return () => {

        // Start apps without user settings
        applicationPropertiesService.get()
          .subscribe(() => {
            platformRef.bootstrapModule(AppModule);
            platformRef.bootstrapModule(HeaderModule);
            platformRef.bootstrapModule(FooterModule);
          });

        // Start app with user settings
        combineLatest(applicationPropertiesService.get(), settingsService.get())
          .subscribe(() => {
            platformRef.bootstrapModule(WidgetsModule);
          });
      };
    },
    deps: [ApplicationPropertiesService, UserSettingsService]
  }
]);
