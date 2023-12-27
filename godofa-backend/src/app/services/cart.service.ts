import { Injectable } from '@angular/core';
import { CartItems } from '../models/cartItems';
import { ProductDetail } from '../models/product';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  addToCart(productDetail:ProductDetail){

    let item= CartItems.find(c=>c.product.productId=== productDetail.productId)

    if(item){
      item.quantity +=1;
    }else {
      let cartItem= new CartItem();
      cartItem.product=productDetail;
      cartItem.quantity=1;
      CartItems.push(cartItem)
    }
  }

  removeFromCart(productDetail:ProductDetail){
    let item:CartItem = CartItems.find(c=>c.product.productId=== productDetail.productId)
    CartItems.splice(CartItems.indexOf(item),1);

  }

  list():CartItem[]{
    return CartItems;
  }
}
