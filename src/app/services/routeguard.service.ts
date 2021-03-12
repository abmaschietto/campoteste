import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree, Route, ActivatedRoute, NavigationEnd} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})

export class RouteguardService implements CanActivate{

  url:string;

  constructor(private loginService: LoginService,
              private router: Router,
              private route:ActivatedRoute) {
               }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    this.url = this.loginService.mostraUrl()

    if(!this.loginService.isLogged()){
      this.loginService.handler()
    }
    return this.loginService.isLogged();
}

}
