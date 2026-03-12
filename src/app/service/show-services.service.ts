import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowServicesService {

   SHOW_URL :string =environment.BASE_SHOWS_URL
   SEARCH_URL : string = `${this.SHOW_URL}/search/shows`

  constructor(
     private _http: HttpClient
  ) { }

  fetchSearchShows(query:string){
    // let URL = `${this.SEARCH_URL}?q=${query}`
    let params = new HttpParams().set('q', query)
    return this._http.get(this.SEARCH_URL,{params})
  }
}
