// product.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductPost } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';
import { ProductDetail } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html', 
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  productPost: ProductPost[] = [];
  productDetail: ProductDetail[] = [];
  dataLoaded=false;
  filterText="";

  constructor(private productService: ProductService,
    private activatedRoute:ActivatedRoute,
     private toastrService:ToastrService,
     private cartService:CartService
     ) { }

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(params=>{
      if(params["productCategoryId"]){
        this.getProductsByCategory(params["productCategoryId"])
      }else{
        this.getProducts()
      }
    })
  }
    getProducts() {  
     this.productService.getProducts().subscribe(response => {
      this.productDetail = response.data 
      this.dataLoaded=true;
    })
  }

  getProductsByCategory(productCategoryId:number) {
    this.productService.getProductsByCategory(productCategoryId).subscribe(response => {
     this.productDetail = response.data 
     this.dataLoaded=true;
   })
 }

 addToCart(productDetail:ProductDetail){
  this.toastrService.success("Sepete eklendi",productDetail.productName)

  this.cartService.addToCart(productDetail);
 }


  
}
