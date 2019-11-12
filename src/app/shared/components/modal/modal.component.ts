import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input()
  title: string = '';

  @Input()
  open: boolean = false;

  @Output() onClose = new EventEmitter();

  close() {
    this.open = false;
    this.onClose.emit(this.open);
  }

}
