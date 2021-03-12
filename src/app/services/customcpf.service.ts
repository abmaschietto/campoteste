import { Injectable } from '@angular/core';
import { Residencias } from '../models/residencias';

@Injectable({
  providedIn: 'root'
})
export class CustomcpfService {



  constructor() { }

  residentes: Residencias[] = [
    {nome:'Artur', cep:'02433070'},
    {nome:'Lucinda', cep:'02463100'}
  ]


  pegaCpfFeito():Residencias[]{
    return this.residentes;
  }
}
