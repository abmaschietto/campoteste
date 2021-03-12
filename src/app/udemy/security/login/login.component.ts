import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  rota:string;
  respostaLogado$:Observable<string>

  constructor(private builder: FormBuilder,
              private serviceLogin: LoginService,
              private router: Router,
              private activtedRoute: ActivatedRoute
            ) { }

  ngOnInit() {
    this.formLogin = this.builder.group({
      username:[null, [Validators.required, Validators.email]],
      password:[null, Validators.required]
    })
    console.log(this.activtedRoute.snapshot.params['rota']);

    this.rota = this.activtedRoute.snapshot.params['rota'] || 'meuTeste'
  }

  verificaValid(campo:string){
    return this.formLogin.get(campo).invalid && this.formLogin.get(campo).touched;
  }

  verificaErro(campo:string){
    return {
      'is-invalid':this.verificaValid(campo)
    }
  }

  login(login:string){

     this.serviceLogin.fazerLogin(login);
     this.router.navigate([this.rota]);
    //  this.serviceLogin.fazerLogin(login).subscribe(res =>{
    //    if(this.serviceLogin.isLogged()){
    //    }
    //  },
    //  err =>{
    //    console.log(err);

    //  },
    //  ()=> this.router.navigate([this.rota]));

  }

}
