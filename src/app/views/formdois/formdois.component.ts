import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { empty, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cep } from 'src/app/models/cep';
import { CepcerviceService } from 'src/app/services/cepcervice.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-formdois',
  templateUrl: './formdois.component.html',
  styleUrls: ['./formdois.component.css']
})
export class FormdoisComponent implements OnInit {

  public form: FormGroup;
  ceps$: Observable<Cep>;

  constructor(private cepService: CepcerviceService,
              private builder: FormBuilder,
              private loginService: LoginService) { }

  ngOnInit() {
    this.form = this.builder.group({
      nome: ['', Validators.required],
      cep: ['', Validators.required]
    })
  }

  sender(){
    if(this.form.valid){
      console.log(this.form.get('nome').value);
    }else{
      console.log("INVÁLIDO");
      Object.keys(this.form.controls).forEach( campo =>{
        this.form.get(campo).markAsDirty()
      })
    }
  }

  verifier(campo:string){
    return this.form.get(campo).invalid && (this.form.get(campo).dirty || this.form.get(campo).touched)
  }

  errorClass(campo){
    return{'is-invalid':this.verifier(campo)}
  }

  buscaCep(){
   this.ceps$ =this.cepService.buscaCep(this.form.get('cep').value)
   .pipe(
     catchError(error =>{
       console.error(error)
       return empty()
     })
   );

  }

  logout(){
    this.loginService.logout()
  }

}
