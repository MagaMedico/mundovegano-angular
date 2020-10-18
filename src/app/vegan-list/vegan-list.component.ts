import { Component, OnInit } from '@angular/core';
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
      "image": "assets/img/tofu.jpg",
      "clearance": true,
      "quantity": 0,
    },
    {
      "name":"Hummus",
      "type":"Proteina",
      "price":300,
      "stock":0,
      "image": "assets/img/tofu.jpg",
      "clearance": false,
      "quantity": 0,
    }  
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(product: Products): void{
    if(product.quantity<product.stock)
    product.quantity++;
  }

  downQuantity(product: Products): void{
    if(product.quantity>0)
      product.quantity--;
  }

  changeQuantity(event, product: Products): void{
    if(event.target.value < 0){
      event.target.value=event.target.value*(-1);;
      product.quantity=event.target.value;
    }
    if(event.target.value > product.stock){
      product.quantity=product.stock;
    }
    if(event.target.value%1!=0){
      event.target.value=parseInt(event.target.value, 10);
      product.quantity=event.target.value;
    }
  }

}
