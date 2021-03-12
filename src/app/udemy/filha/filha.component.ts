import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as AOS from 'aos'


@Component({
  selector: 'app-filha',
  templateUrl: './filha.component.html',
  styleUrls: ['./filha.component.css']
})
export class FilhaComponent implements OnInit {

  success:boolean

  @Output()
  valorPai = new EventEmitter();

  testForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.testForm = builder.group({
      email:[null],
      dinheiro:[null]
    })
  }

  ngOnInit() {
    AOS.init()
  }

  testeLog(){
    console.log("chamado do pai - para filha");

  }

  send(){
    this.success = !this.success;
    this.valorPai.emit(this.testForm.get('email').value);

  }

}
