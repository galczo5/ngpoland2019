import {ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef} from '@angular/core';
import {UserSettingsComponent} from './user-settings/user-settings.component';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsModalService {

  private instance: ComponentRef<UserSettingsComponent> = null;

  constructor(private readonly factoryResolver: ComponentFactoryResolver) {}

  open(viewContainerRef: ViewContainerRef): void {
    if (this.instance !== null) {
      console.error('User settings modal already opened');
      return;
    }

    const factory = this.factoryResolver.resolveComponentFactory(UserSettingsComponent);
    this.instance = viewContainerRef.createComponent(factory);
  }

  close(): void {
    if (this.instance === null) {
      console.error('User settings modal not opened');
      return;
    }

    this.instance.destroy();
    this.instance = null;
  }
}
