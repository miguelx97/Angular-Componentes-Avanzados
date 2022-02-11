import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input() product!: Product;
  @Output() buyProduct:EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit(): void {

  }

  buy(product:Product) {
    this.buyProduct.emit(product);
  }

  priceWithIVA(){
    console.log(this.product.title + ' - ' + this.product.price);    
    return this.product.price;
  }

  info(product:Product){
    alert(JSON.stringify(product));
    return false;
  }

}
