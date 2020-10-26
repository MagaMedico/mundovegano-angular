import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from './vegan-list/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _shopList: Products[] = [];
  shopList: BehaviorSubject<Products[]> = new BehaviorSubject([]);

  constructor() { }

  addToDiet(product: Products) {
    let item: Products = this._shopList.find((v1)=> v1.name == product.name);
    if(!item){
      this._shopList.push({... product});
    } else {
      item.quantity += product.quantity;
    }
    console.log(this._shopList);
    this.shopList.next(this._shopList);
  }

}
