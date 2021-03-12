import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  listaEmails: string[] = [
    "arturnububbu@.com",
    "jujujuuuu@.comzao",
    "artur.b.m@hotmail.com"
  ]

  @Output()
  value = new EventEmitter();

  formModal: FormGroup

  constructor(private buider: FormBuilder) { }

  ngOnInit() {
    this.formModal = this.buider.group({
      email:[null]})
  }


  passBackValue(){
    this.value.emit(this.formModal.get('email').value)

  }

}
