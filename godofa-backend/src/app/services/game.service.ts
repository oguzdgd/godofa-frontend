import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ListResponseModel } from '../models/listResponseModel';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  apiUrl = "https://localhost:44374/api/"
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Game>>{    
    let newPath=this.apiUrl+"product/getall"
    return this.httpClient.get<ListResponseModel<Game>>(newPath)
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Game>>{
    let newPath=this.apiUrl+"games/getbyid?gamecategoryId="+categoryId    
    return this.httpClient.get<ListResponseModel<Game>>(newPath)
  } 

}
