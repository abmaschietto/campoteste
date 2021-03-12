import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilhaComponent } from '../filha/filha.component';

@Component({
  selector: 'app-fatherpage',
  templateUrl: './fatherpage.component.html',
  styleUrls: ['./fatherpage.component.css']
})
export class FatherpageComponent implements OnInit, OnDestroy{

  constructor() { }


  email:string ='';
  collector$: Subscription[] =[]

  ngOnInit() {
  }

  onActivate(appFilho){
    appFilho.testeLog()
    this.collector$.push(appFilho.valorPai.subscribe(data =>{
      this.email = data;
    })
    )
  }

  ngOnDestroy(): void {
    this.collector$.forEach(subscribe =>{
      subscribe.unsubscribe()
    })
  }

}
