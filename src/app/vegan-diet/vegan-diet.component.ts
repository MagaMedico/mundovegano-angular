import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Products } from '../vegan-list/Products';

@Component({
  selector: 'app-vegan-diet',
  templateUrl: './vegan-diet.component.html',
  styleUrls: ['./vegan-diet.component.scss']
})
export class VeganDietComponent implements OnInit {

  shopList$: Observable<Products[]>;
  constructor(private cart: ProductCartService) {
    this.shopList$ = cart.shopList.asObservable();
   }

  ngOnInit(): void {
  }

}
