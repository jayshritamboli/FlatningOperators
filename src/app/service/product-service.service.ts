import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductResponse} from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private readonly BASE_URL : string = environment.BASE_PRODUCT_URL
  private readonly SEARCH_URL: string = `${this.BASE_URL}/products/search`
 
  constructor(
   private _httpClient : HttpClient
  ) { }

  fetchSearchProduct(query: string){
    let params = new HttpParams().set('q' ,query)
    return this._httpClient.get<ProductResponse>(this.SEARCH_URL,{params})
  }
  
}
