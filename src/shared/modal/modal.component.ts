import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/components/modal';
 
@Component({
  selector: 'modal-demo',
  templateUrl: 'modal.component.html'
})
export class ModalComponent {
  @ViewChild('childModal') public childModal:ModalDirective;
 
  public showChildModal():void {
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }
}