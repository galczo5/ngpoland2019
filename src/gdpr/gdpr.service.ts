import {ComponentFactoryResolver, Injectable, Injector, ViewContainerRef} from '@angular/core';
import {ModalComponent} from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class GDPRService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  open(viewContainerRef: ViewContainerRef): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    viewContainerRef.createComponent(factory);
  }
}
