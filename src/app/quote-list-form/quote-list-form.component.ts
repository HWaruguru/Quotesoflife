import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quote-list-form',
  templateUrl: './quote-list-form.component.html',
  styleUrls: ['./quote-list-form.component.css']
})
export class QuoteListFormComponent {
  @Input() quote: object;
  myForm: FormGroup;

  constructor( public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      quote: '',
      author: '',
      addedBy: ''
    });
  }

  public submitForm() {
    this.activeModal.close(this.myForm.value);
  }

}


