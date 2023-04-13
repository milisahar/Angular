import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList!: Product[]
  priceMax!:number

  constructor() { }

  ngOnInit(): void {
    this.productList = [
      {id:1,
        title:'p1',
        price:500,
        quantity:0,
        like:0
      },
      {id:2,
        title:'p2',
        price:150,
        quantity:0,
        like:0
      },
      {id:3,
        title:'p3',
        price:60,
        quantity:7,
        like:0
      }
    ]
  }
  increments(i: number){
    this.productList[i].like++
  }
  decrements(i: number){
    this.productList[i].quantity--
  }

}
