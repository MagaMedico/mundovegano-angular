import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Products } from './Products'

@Component({
  selector: 'app-vegan-list',
  templateUrl: './vegan-list.component.html',
  styleUrls: ['./vegan-list.component.scss']
})
export class VeganListComponent implements OnInit {

  products: Products[] = [
    {
      "name":"Tofu",
      "type":"Proteina",
      "price":100,
      "stock":10,
      "image": "assets/img/tofu.jpg",
      "clearance": false,
      "quantity": 0,
    },
    {
      "name":"Milas de Soja",
      "type":"Proteina",
      "price":200,
      "stock":5,
      "image": "assets/img/milas.jpg",
      "clearance": true,
      "quantity": 0,
    },
    {
      "name":"Hummus",
      "type":"Proteina",
      "price":300,
      "stock":0,
      "image": "assets/img/hummus.jpg",
      "clearance": false,
      "quantity": 0,
    }  
  ];
  
  constructor(private cart: ProductCartService) { }

  ngOnInit(): void {
  }

  addToDiet(product):void{
    this.cart.addToDiet(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }

  maxReached(m: number){
    alert(m);
  }
}
