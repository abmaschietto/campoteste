import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CepcerviceService {


  constructor(private http: HttpClient) { }

  buscaCep(cep:number):Observable<any>{
    return this.http.get(`${environment.cep}${cep}/json/`).pipe(tap())
  }
}
