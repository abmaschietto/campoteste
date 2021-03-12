import { Component, OnInit } from '@angular/core';
import { Residencias } from 'src/app/models/residencias';
import { CepcerviceService } from 'src/app/services/cepcervice.service';
import { CustomcpfService } from 'src/app/services/customcpf.service';

@Component({
  selector: 'app-udemydois',
  templateUrl: './udemydois.component.html',
  styleUrls: ['./udemydois.component.css']
})
export class UdemydoisComponent implements OnInit {

  residentes: Residencias[]
  beb:number;

  constructor(private cepCustom:CustomcpfService,
              private cep:CepcerviceService) {

   }

  ngOnInit() {
    this.residentes = this.cepCustom.pegaCpfFeito();

  }



}
