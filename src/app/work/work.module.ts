import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [PaginacaoComponent],
  imports: [
    CommonModule,
    NgxPaginationModule
  ]
})
export class WorkModule { }
