import {Component, OnInit} from '@angular/core';
import {UserSettingsModalService} from '../user-settings-modal.service';
import {UserSettingsStoreService} from '../../../platform/user-settings-store.service';
import {Widget} from '../../../platform/widget';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html'
})
export class UserSettingsComponent implements OnInit {

  activeWidget: Widget;

  Widget = Widget;

  constructor(private readonly modalService: UserSettingsModalService,
              private readonly storeService: UserSettingsStoreService) {}

  ngOnInit(): void {
    this.activeWidget = this.storeService.getWidget();
  }

  setWidget(widget: string): void {
    localStorage.setItem('widget', widget);
  }

  saveChanges(): void {
    location.reload();
  }

  close(): void {
    this.modalService.close();
  }

}
