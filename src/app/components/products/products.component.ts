import { Component, DoCheck, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy, DoCheck {

  constructor(
    private productsSvc: ProductsService
  ) { }
  
  lProducts?:Product[];
  @ViewChild(AlertComponent, {static: true}) alertChild!: AlertComponent
  lProdsSubs?:Subscription
  selectedProducts:Product[] = [];
  totalPrice:number = 0;

  async ngOnInit() {
    this.lProdsSubs = this.productsSvc.getAllProducts().subscribe(lProducts => {
      this.lProducts = lProducts;
    })
    console.log(this.lProducts);
  }

  buySelectedProduct(product:Product){
    // alert('Comprando ' + product.title);
    // this.alertChild.mostrar(product);
    this.selectedProducts?.push(product);
    this.totalPrice = this.getTotalPrice(this.selectedProducts);
  }

  payAlert(price:number){
    console.log("HOLAAA");
    
    this.alertChild.mostrar(price);
  }

  ngOnDestroy(): void {
    this.lProdsSubs?.unsubscribe();
  }

  deleteProduct(id:number){
    this.selectedProducts = this.selectedProducts.filter(product => product.id !== id);
    this.totalPrice = this.getTotalPrice(this.selectedProducts);
  }

  getTotalPrice(prods:Product[]):number {
    const reducer = (previousValue:number, currentValue:number) => previousValue + currentValue;
    return prods.map(prod => prod.price).reduce(reducer);

  }

  ngDoCheck(): void {
    console.log("DOM MODIFICADO. En cualquier componente");    
    //Consume mucho
  }

}
