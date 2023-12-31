import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  constructor(public activeModal: NgbActiveModal) { }

  @Input()
  public isNew: boolean = false;

  ngOnInit(){
    debugger;
    console.log(this.isNew);
  }
 
}
