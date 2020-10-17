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
    },
    {
      "name":"Milas de Soja",
      "type":"Proteina",
      "price":200,
      "stock":5,
      "image": "assets/img/tofu.jpg",
      "clearance": true,
    },
    {
      "name":"Hummus",
      "type":"Proteina",
      "price":300,
      "stock":0,
      "image": "assets/img/tofu.jpg",
      "clearance": false,
    }  
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
