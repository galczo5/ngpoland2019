import {
  APP_BOOTSTRAP_LISTENER,
  ComponentFactoryResolver,
  ComponentRef,
  NgModule,
  ViewContainerRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ModalComponent],
  entryComponents: [ModalComponent],
  providers: [{
    multi: true,
    provide: APP_BOOTSTRAP_LISTENER,
    useFactory: (resolver: ComponentFactoryResolver) => {
      return (cRef: ComponentRef<any>) => {
        const factory = resolver.resolveComponentFactory(ModalComponent);
        const viewContainerRef = cRef.injector.get(ViewContainerRef);

        if (viewContainerRef) {
          viewContainerRef.createComponent(factory);
        } else {
          console.error(`${cRef.componentType.name} has to provide ViewContainerRef for GDPR modal!`);
        }
      };
    },
    deps: [ComponentFactoryResolver]
  }],
})
export class GDPRModule { }
