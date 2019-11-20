import { ComponentFactoryResolver, Injectable, Injector, ViewContainerRef } from '@angular/core';
import { GdprModalComponent } from './modal/gdpr-modal.component';

@Injectable({
  providedIn: 'root'
})
export class GDPRService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  open(viewContainerRef: ViewContainerRef): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(GdprModalComponent);
    viewContainerRef.createComponent(factory);
  }
}
