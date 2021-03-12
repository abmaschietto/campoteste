import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Cep } from 'src/app/models/cep';
import { CepcerviceService } from 'src/app/services/cepcervice.service';

@Component({
  selector: 'app-udemydetails',
  templateUrl: './udemydetails.component.html',
  styleUrls: ['./udemydetails.component.css']
})
export class UdemydetailsComponent implements OnInit {

  constructor(private cep: CepcerviceService,
              private route: ActivatedRoute) { }

  cep$:Observable<Cep>;

  ngOnInit() {
    this.cep$ = this.cep.buscaCep(this.route.snapshot.params['cep']);
  }

}
