import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { take } from 'rxjs/operators';
import { Cep } from 'src/app/models/cep';
import { CepcerviceService } from 'src/app/services/cepcervice.service';

@Component({
  selector: 'app-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css']
})
export class DataformComponent implements OnInit, AfterViewInit {

  Cep$:Observable<Cep>;

  end: Cep;

  @ViewChild('nome', {static: false}) focus: ElementRef<HTMLInputElement>
  formulario: FormGroup;

  constructor(private builder: FormBuilder, private cep:CepcerviceService) { }

  ngAfterViewInit(): void {
    this.focus.nativeElement.focus()
  }

  ngOnInit() {
    this.formulario = this.builder.group({
      nome:[null, [Validators.required, Validators.minLength(5)]],
      email:[null, [Validators.required, Validators.email, Validators.minLength(5)]],
      cep:[null, Validators.required]
    })
  }

  envio(){
    if(this.formulario.valid){
      console.log('-------');
      console.log(JSON.stringify(this.formulario.value));
    }else{
      console.log("form inválido");
      Object.keys(this.formulario.controls).forEach(campo =>{
        console.log(campo);
        this.formulario.get(campo).markAsDirty();

      })

    }
  }

  buscaCep(){

    this.Cep$ = this.cep.buscaCep(this.formulario.get('cep').value);
    this.Cep$.subscribe(res =>{
      this.end = res;

    })
    //   this.cep.buscaCep(this.formulario.get('cep').value).pipe(take(1))
    //   .subscribe(res =>{
    //     this.end = res
    //     console.log(res);
    //  });
    }

    aplicaCssInvalido(campo:string):boolean{
      return this.formulario.get(campo).invalid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
    }

    aplicaCssValido(campo:string):boolean{
      return this.formulario.get(campo).valid;
    }

}
