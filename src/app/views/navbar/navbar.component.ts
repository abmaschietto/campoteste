import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  opcoes: string = '0';

  constructor() { }

  registrar(valor: any){
    this.opcoes = valor;
    console.log(this.opcoes);
    
    
  }

  ngOnInit() {
  }

}
