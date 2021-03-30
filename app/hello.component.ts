import { Component, Input } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'hello',
  template: `
    <button (click)="showSuccess()">showSuccess</button>
    <button (click)="showError()">showError</button>
    <button (click)="showWarning()">showWarning</button>
    <button (click)="showInfo()">showInfo</button>
    <button (click)="showCustom()">showCustom</button>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  constructor(public toastr: ToastsManager) {}

  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }

  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }
  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo() {
    this.toastr.info('Just some information for you.');
  }
  
  showCustom() {
    this.toastr.custom('',
      'Custom Message',
      {
        enableHTML: true,
        dismiss: 'click',
        toastLife: 3000,
        showCloseButton: true,
        positionClass: 'toast-bottom-right',
        messageClass: "border",
        titleClass: 'border',
        animate: 'flyRight'
      });
  }
}
