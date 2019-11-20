import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UserSettingsModalService } from '../configuration/user-settings-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private readonly viewContainerRef: ViewContainerRef,
              private readonly modalService: UserSettingsModalService) {}

  openConfiguartion(): void {
    this.modalService.open(this.viewContainerRef);
  }

}
