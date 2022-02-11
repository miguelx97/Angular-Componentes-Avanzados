import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  constructor() { }

  @Input() products?:Product[];

  ngOnInit(): void {
  }

  search(event: any, input:any): void {
    if(event.code === 'Enter'){  
      const items:string[] | undefined = this.products?.filter(product => product.title.includes(input.value)).map(product => product.title);   
      alert(JSON.stringify(items))
    }
  }

}
