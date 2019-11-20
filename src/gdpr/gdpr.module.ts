import {
  APP_BOOTSTRAP_LISTENER,
  ComponentFactoryResolver,
  ComponentRef,
  NgModule,
  ViewContainerRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GdprModalComponent } from './modal/gdpr-modal.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GdprModalComponent],
  entryComponents: [GdprModalComponent],
  providers: [


    // CODE EXAMPLE BELOW
    {
      multi: true,
      provide: APP_BOOTSTRAP_LISTENER,
      useFactory: (resolver: ComponentFactoryResolver) => {

        return (cRef: ComponentRef<any>) => {
          const factory = resolver.resolveComponentFactory(GdprModalComponent);
          const viewContainerRef = cRef.injector.get(ViewContainerRef);
          viewContainerRef.createComponent(factory);
        };

      },
      deps: [ComponentFactoryResolver]
    }
    // CODE EXAMPLE ABOVE


  ],
})
export class GDPRModule { }
