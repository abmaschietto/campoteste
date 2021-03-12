import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-udemyum',
  templateUrl: './udemyum.component.html',
  styleUrls: ['./udemyum.component.css']
})
export class UdemyumComponent implements OnInit {

  public idade:number;

  public resultado:string;

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  idadeCalculador(idade:number):boolean{
    return idade < 18;
  }

  logout(){
    this.loginService.logout()
  }

  showResult(){
    this.resultado =  `Com a idade de ${this.idade} você ${this.idadeCalculador(this.idade) ? 'é' : 'não é'} menor de idade`
  }

}
