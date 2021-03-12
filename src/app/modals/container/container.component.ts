import { Component, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  
  public user: User = {
    name:'Artur Boudoux Maschietto',
    age: 26
  }


  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(){
    const modalRef = this.modalService.open(ContentComponent);
    modalRef.componentInstance.user =  this.user ;
    modalRef.componentInstance.extra = 'babababab';
    modalRef.result.then((result) => {
      if (result) {
      console.log(result);
      }
      }).catch(err => {});

  }

}
