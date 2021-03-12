import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Teste1Component } from './teste1/teste1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'brmasker-ionic-3';



@NgModule({
  declarations: [Teste1Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrMaskerModule
  ]
})
export class TesteModule { }
