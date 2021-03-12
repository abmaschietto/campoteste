import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataformComponent } from './dataform.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DataformComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DataformModule { }
