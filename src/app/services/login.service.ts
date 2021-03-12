import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string;
  teste:'babababababbaba'
  userChumbado = 'jsantos'

  constructor(private http: HttpClient,
             private router: Router) {

    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e:NavigationEnd)=>{
      window.sessionStorage.setItem('url', e.url)
    })
  }

  isLogged():boolean{
    return (!!window.sessionStorage.getItem('user'));
  }

  fazerLogin(usuario:string){
    // return this.http.get(`http://localhost:8080/simuladorVLI/v1/login/${usuario}`).pipe(tap(res=>{
    //   if(res.resposta === 'Usuário ok')
    //   window.sessionStorage.setItem('user', res.usuario);
    // }))
     if(usuario == this.userChumbado ){
       window.sessionStorage.setItem('user', this.userChumbado);
     }
  }

  mostraUrl(){
    return this.url
  }

  logout(){
    window.sessionStorage.removeItem('user');
  }

  handler(){
    let caminho = window.sessionStorage.getItem('url') || '';
    return this.router.navigate(['login',caminho ]);

  }
}
