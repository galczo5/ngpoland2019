import { enableProdMode, PLATFORM_INITIALIZER } from '@angular/core';
import { combineLatest } from 'rxjs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { AppModule } from './app/app.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { WidgetsModule } from './widgets/widgets.module';
import { ApplicationPropertiesService } from './platform/application-properties.service';
import { UserSettingsService } from './platform/user-settings.service';
import { UserSettingsStoreService } from './platform/user-settings-store.service';

import './utils';

if (environment.production) {
  enableProdMode();
}

const platformRef = platformBrowserDynamic([
  { provide: ApplicationPropertiesService, useClass: ApplicationPropertiesService, deps: [] },
  { provide: UserSettingsService, useClass: UserSettingsService, deps: [] },
  { provide: UserSettingsStoreService, useClass: UserSettingsStoreService, deps: [] },


  // CODE EXAMPLE BELOW
  {
    multi: true,
    provide: PLATFORM_INITIALIZER,
    useFactory: (applicationPropertiesService: ApplicationPropertiesService,
                 settingsService: UserSettingsService,
                 settingsStoreService: UserSettingsStoreService) => {
      return () => {

        const applicationProperties$ = applicationPropertiesService.get();
        applicationProperties$.subscribe(() => {
            platformRef.bootstrapModule(AppModule);
            platformRef.bootstrapModule(HeaderModule);
            platformRef.bootstrapModule(FooterModule);
          });

        combineLatest(applicationProperties$, settingsService.get())
          .subscribe(value => {
            settingsStoreService.setWidget(value[1].enabledWidget);
            platformRef.bootstrapModule(WidgetsModule);
          });
      };

    },
    deps: [ApplicationPropertiesService, UserSettingsService, UserSettingsStoreService]
  }
  // CODE EXAMPLE ABOVE


]);
