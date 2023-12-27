import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartService } from '../../services/cart.service';
import { ProductDetail } from '../../models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[];

  constructor(private  cartServive:CartService, private toastrService:ToastrService){}

  ngOnInit(): void {
    this.getCart();
  }
  getCart(){
    this.cartItems=this.cartServive.list();
  }
  removeFromCart(product:ProductDetail){
     this.cartServive.removeFromCart(product);
     this.toastrService.error(product.productName + " sepetten silindi")
  }

}
