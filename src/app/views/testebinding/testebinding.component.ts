import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-testebinding',
  templateUrl: './testebinding.component.html',
  styleUrls: ['./testebinding.component.css']
})
export class TestebindingComponent implements OnInit {

  aumentador: boolean = false;
  valor: number = 0;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  mostraSpinner()
{
  this.spinner.show();
  setTimeout(() =>{
    this.spinner.hide()
  }, 2000)
}
}
