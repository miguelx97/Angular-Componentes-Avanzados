import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy, OnChanges {

  constructor() { }

  @Input() products?:Product[];
  @Input() price?:number;
  @Output() deleteProd:EventEmitter<number> = new EventEmitter<number>();
  @Output() toPay:EventEmitter<number> = new EventEmitter<number>();
  
  ngOnInit(): void {
    this.keyEvent()
  }

  delete(id:number){
    this.deleteProd.emit(id);
  }

  ngOnChanges(changes:any){
    console.log(changes);
  }

  onKey(event:any){
    console.log('Evento de tecla global', event);  
  }

  keyEvent(){
    document.addEventListener('keypress', (e) => this.onKey(e))
  }

  ngOnDestroy(): void {
    document.removeEventListener('keypress', this.onKey)
  }

  pay(){
    this.toPay.emit(this.price);
  }
}
