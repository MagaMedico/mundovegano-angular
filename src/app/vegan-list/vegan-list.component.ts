import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegan-list',
  templateUrl: './vegan-list.component.html',
  styleUrls: ['./vegan-list.component.scss']
})
export class VeganListComponent implements OnInit {

  products = {
    "name":"Tofu",
    "type":"Proteina",
    "calories":76,
    "nutritional":15,
    "image": "assets/img/tofu.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
