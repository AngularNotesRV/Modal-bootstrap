//https://dev.to/fanmixco/how-to-use-bootstrap-modals-in-angular-in-separate-components-2mai
//https://medium.com/@izzatnadiri/how-to-pass-data-to-and-receive-from-ng-bootstrap-modals-916f2ad5d66e
import { Component, TemplateRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  // constructor(private modalService : NgbModal) {
  // }

  //this is a new way to inject dependencies in components instead using contructors
	private modalService = inject(NgbModal);
	closeResult = '';

  openModal(){
    const activeModal = this.modalService.open(ModalComponent, { ariaLabelledBy: 'modal-basic-title' })
    activeModal.componentInstance.isNew = true;

    activeModal.result.then(
      		(result :any) => {
      			this.closeResult = `Closed with: ${result}`;
      		},
      		(reason : any) => {
      			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      		},
      	);
      }

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}

  title = 'modal-app';
}
