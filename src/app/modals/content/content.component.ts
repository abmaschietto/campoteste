import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  public user: User  = {
    name: '',
    age: 0
  };

  public extra: string = '';

  constructor(private betaModal: NgbActiveModal) { }

  ngOnInit() {
 
  }

  passBack(){
    this.betaModal.close(this.user)
  }

}
