import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cep } from 'src/app/models/cep';
import { CepcerviceService } from 'src/app/services/cepcervice.service';

@Component({
  selector: 'app-teste1',
  templateUrl: './teste1.component.html',
  styleUrls: ['./teste1.component.css']
})
export class Teste1Component implements OnInit {

  public formulario: FormGroup;

  cep$:Observable<Cep>;

  constructor(private builder: FormBuilder, private cepService: CepcerviceService) { }


  ngOnInit() {
    this.formulario = this.builder.group({
      nome:[null, Validators.required],
      sobrenome:[null, Validators.required],
      email:[null, Validators.required],
      confirmaEmail:[null],
      CEP:[null, Validators.required]
    }, {validators: [Teste1Component.equalsTo]})
  }

  static equalsTo(grupo: AbstractControl): {[key:string]:boolean}{
    const email =  grupo.get('email');
    const confirmaEmail = grupo.get('confirmaEmail');
    if(!email || !confirmaEmail){
      return undefined;
    }if(email.value !== confirmaEmail.value){
      return {emailDiferente: true};
    }
    return undefined;
  }

  buscaCep(){
    console.log(this.formulario.value);

    console.log(this.formulario.get('CEP').value);

    this.cep$ = this.cepService.buscaCep(this.formulario.get('CEP').value)
  }

  send(){
    if(this.formulario.invalid){
      console.log("FORMULÁRIO INVÁLIDO");
      Object.keys(this.formulario.controls).forEach(campo=>{
        this.formulario.get(campo).markAsDirty()
      })
    }else{
      console.log("FORM VÁLIDO");
      console.log(this.formulario.value);

      this.formulario.reset()

    }

  }

  isInvalid(campo:string){
    return this.formulario.get(campo).invalid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
  }

  aplicaCss(campo:string){
    if(this.formulario.get(campo).invalid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)){
      return {
        'is-invalid': true
      }
    }if (this.formulario.get(campo).touched && this.formulario.get(campo).valid) {
      return {
        'is-valid':true
      }
    }
  }
}
