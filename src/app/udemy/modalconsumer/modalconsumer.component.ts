import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalconsumer',
  templateUrl: './modalconsumer.component.html',
  styleUrls: ['./modalconsumer.component.css']
})
export class ModalconsumerComponent implements OnInit {

  public formularioModal: FormGroup;
  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.formularioModal = this.builder.group({
      email: [null, [Validators.required, Validators.email ]]
    })
  }

  post(){
    console.log("fom");

  }

  recebeEmail(email){
    this.formularioModal.get('email').setValue(email);
  }

}
