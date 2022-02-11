import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }
  active: boolean = false;
  price?: number

  ngOnInit(): void {
  }

  close(){
    this.active = false;
  }

  mostrar(price: number){
    this.price = price;
    this.active = true;
  }

}
