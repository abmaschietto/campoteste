import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UdemyumComponent } from './udemyum/udemyum.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { UdemydoisComponent } from './udemydois/udemydois.component';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';
import { UdemydetailsComponent } from './udemydetails/udemydetails.component';
import { LoginComponent } from './security/login/login.component';
import { LoadingInterceptor, MyInterceptor } from '../interceptors/myinterceptor';
import { FatherpageComponent } from './fatherpage/fatherpage.component';
import { FilhoComponent } from './filho/filho.component';
import { FilhaComponent } from './filha/filha.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CURRENCY_MASK_CONFIG } from 'ngx-currency-mask/src/currency-mask.config';
import { CurrencyMaskConfig } from 'ng2-currency-mask/src/currency-mask.config';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { KaiquecomkamanoComponent } from './kaiquecomkamano/kaiquecomkamano.component';
import { ModalComponent } from './modal/modal.component';
import { ModalconsumerComponent } from './modalconsumer/modalconsumer.component';


export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.'
};


@NgModule({
  declarations: [UdemyumComponent, UdemydoisComponent, UdemydetailsComponent, LoginComponent, FatherpageComponent, FilhoComponent, FilhaComponent, KaiquecomkamanoComponent, ModalComponent, ModalconsumerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    FontAwesomeModule
  ],
  providers:[
    {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi:true},
    {provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig}

  ]

})
export class UdemyModule { }
