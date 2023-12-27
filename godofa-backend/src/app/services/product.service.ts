import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ProductPost } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductDetail } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44374/api/"
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<ProductDetail>>{    
    let newPath=this.apiUrl+"product/getalldetails"
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath)
  }

  getProductsByCategory(productCategoryId:number):Observable<ListResponseModel<ProductDetail>>{
    let newPath=this.apiUrl+"products/getbyid?productcategoryId="+productCategoryId    
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath)
  } 

  add(product:ProductPost):Observable<ResponseModel>{
    let newPath = this.apiUrl+"add"
    return this.httpClient.post<ResponseModel>(newPath,product);

  }

}
