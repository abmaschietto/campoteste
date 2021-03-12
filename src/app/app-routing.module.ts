import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataformComponent } from './forms/dataform/dataform.component';
import { RouteguardService } from './services/routeguard.service';
import { Teste1Component } from './teste/teste1/teste1.component';
import { FatherpageComponent } from './udemy/fatherpage/fatherpage.component';
import { FilhaComponent } from './udemy/filha/filha.component';
import { FilhoComponent } from './udemy/filho/filho.component';
import { ModalComponent } from './udemy/modal/modal.component';
import { ModalconsumerComponent } from './udemy/modalconsumer/modalconsumer.component';
import { LoginComponent } from './udemy/security/login/login.component';
import { UdemydetailsComponent } from './udemy/udemydetails/udemydetails.component';
import { UdemydoisComponent } from './udemy/udemydois/udemydois.component';
import { UdemyumComponent } from './udemy/udemyum/udemyum.component';
import { FormdoisComponent } from './views/formdois/formdois.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { TestebindingComponent } from './views/testebinding/testebinding.component';
import { PaginacaoComponent } from './work/paginacao/paginacao.component';


const routes: Routes = [
  {path:'', component: HomeComponent, canActivate:[RouteguardService]},
  {path:'login', component:LoginComponent},
  {path:'login/:rota', component:LoginComponent},
  {path:'teste', component:TestebindingComponent, canActivate:[RouteguardService]},
  {path:'navbar', component:NavbarComponent, canActivate:[RouteguardService]},
  {path:'forms', component: DataformComponent, canActivate:[RouteguardService]},
  {path:'form2', component: FormdoisComponent, canActivate:[RouteguardService]},
  {path:'meuTeste', component: Teste1Component, canActivate:[RouteguardService]},
  {path:'udemyum', component: UdemyumComponent, canActivate:[]},
  {path:'udemydois', component: UdemydoisComponent, canActivate:[RouteguardService]},
  {path:'udemydetail/:cep', component:UdemydetailsComponent, canActivate:[RouteguardService]},
  {path:'modal', component:ModalconsumerComponent, canActivate:[RouteguardService]},
  {path:'pai', component:FatherpageComponent, canActivate:[RouteguardService],
        children:[
          {path:'filho', component: FilhoComponent},
          {path:'filha', component:FilhaComponent}
  ]},
  {path:'paginacao', component: PaginacaoComponent, canActivate: [RouteguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
