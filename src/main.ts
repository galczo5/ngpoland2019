import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { AppModule } from './app/app.module';
import { HeaderModule } from './header/header.module';
import {FooterModule} from './footer/footer.module';
import {WidgetsModule} from './widgets/widgets.module';

if (environment.production) {
  enableProdMode();
}

const platformRef = platformBrowserDynamic();

platformRef.bootstrapModule(AppModule);
platformRef.bootstrapModule(HeaderModule);
platformRef.bootstrapModule(FooterModule);
platformRef.bootstrapModule(WidgetsModule);
