import {ChangeDetectorRef, Component, ComponentRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  modalVisible: boolean = true;

  close(): void {
    this.modalVisible = false;
  }

}
