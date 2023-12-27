import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit{

  productAddForm:FormGroup;

  constructor(private formBuilder: FormBuilder,private productService:ProductService,
    private toastrService:ToastrService){}

  ngOnInit(): void {
    this.createProductAddFrom();
  }

  createProductAddFrom(){
    this.productAddForm =this.formBuilder.group(
      {
        productId:["",Validators.required],
        productName:["",Validators.required],
        productCategoryId:["",Validators.required],
        gameId:["",Validators.required],  
        price:["",Validators.required],
        description:["",Validators.required],
        status:["",Validators.required]
      })
  }

  add(){

    if(this.productAddForm.valid){
     let productPostModel=  Object.assign({},  this.productAddForm.value)
      this.productService.add(productPostModel).subscribe(response=>{
        console.log(response)
      //this.toastrService.success(response.message,"Başarılı")

      },responseError=>{
        console.log(responseError.error)
        this.toastrService.error(responseError)
      }
      )
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
     

  }
}
