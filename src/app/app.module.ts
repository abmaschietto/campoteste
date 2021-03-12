import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ContainerComponent } from './modals/container/container.component';
import { ContentComponent } from './modals/content/content.component';
import { FormsModule}   from '@angular/forms';
import { TestebindingComponent } from './views/testebinding/testebinding.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { EstiloamareloDirective } from './directives/estiloamarelo.directive';
import { HostlistenerDirective } from './directives/hostlistener.directive';
import { SizedirectiveDirective } from './directives/sizedirective.directive';
import  { NgxSpinnerModule } from 'ngx-spinner';
import { CurrencyMaskModule } from 'ng2-currency-mask'
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';
import  localePt  from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DataformModule } from './forms/dataform/dataform.module';
import { HttpClientModule} from '@angular/common/http';
import { FormdoisComponent } from './views/formdois/formdois.component'
import { ReactiveFormsModule } from '@angular/forms';
import { TesteModule } from './teste/teste.module';
import { UdemyModule } from './udemy/udemy.module';
import { WorkModule } from './work/work.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
registerLocaleData(localePt);

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
  declarations: [
    AppComponent,
    HomeComponent,
    ContainerComponent,
    ContentComponent,
    TestebindingComponent,
    NavbarComponent,
    EstiloamareloDirective,
    HostlistenerDirective,
    SizedirectiveDirective,
    FormdoisComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgxSpinnerModule,
    CurrencyMaskModule,
    DataformModule,
    HttpClientModule,
    ReactiveFormsModule,
    TesteModule,
    UdemyModule,
    WorkModule,
    BrowserAnimationsModule

  ],
  providers: [
    {provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig},
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent],
  entryComponents:[ContainerComponent, ContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
