import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { faCode, faCoffee, faLightbulb, faBug } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  facode = faCode;
  faCoffee = faCoffee;
  faLightbulb = faLightbulb;
  faBug = faBug;

  constructor() { }



  @Output()
  valorPai = new EventEmitter();

  ngOnInit() {
    this.valorPai.emit('valor chumbado')
  }

  testeLog(){
    console.log("chamado do pai - para filho");
  }


}
