import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllProducts(): Observable<Product[]>{
    const productsUrl="https://fakestoreapi.com/products?limit=6";
    const lProducts = this.http.get<Product[]>(productsUrl);
    return lProducts;//.toPromise()
  }
}
