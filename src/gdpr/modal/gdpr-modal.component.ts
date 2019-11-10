import {Component} from '@angular/core';

@Component({
  selector: 'app-gdpr-modal',
  templateUrl: './gdpr-modal.component.html',
  styleUrls: ['./gdpr-modal.component.css']
})
export class GdprModalComponent {

  modalVisible = true;

  close(): void {
    this.modalVisible = false;
  }

}
