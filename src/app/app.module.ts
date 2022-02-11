import { NgModule, LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { AlertComponent } from './components/alert/alert.component';
import { registerLocaleData } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { SearcherComponent } from './components/searcher/searcher.component';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    AlertComponent,
    CartComponent,
    SearcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , HttpClientModule
  ],
  providers: [
  {    
    provide: LOCALE_ID,
    useValue: 'es-ES'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
