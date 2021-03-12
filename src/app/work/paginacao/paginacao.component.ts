import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Localidade } from 'src/app/models/localidade';
import { LocalidadeService } from 'src/app/services/localidade.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-paginacao",
  templateUrl: "./paginacao.component.html",
  styleUrls: ["./paginacao.component.css"],
})
export class PaginacaoComponent implements OnInit, OnDestroy {

  p: number = 1;
  localidades: Localidade[];
  constructor(
    private localidadeService: LocalidadeService,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit() {}

  get() {
    this.spinnerService.show()
    this.localidadeService.getLocalidades().subscribe(res=>{
    this.localidades = res;
    this.spinnerService.hide()
    });
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
}
