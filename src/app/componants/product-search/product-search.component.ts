import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Products } from 'src/app/models/products';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  searchControl : FormControl<any> = new FormControl()
  productsArr:Products[] = [];
  constructor(
    private _productServices : ProductServiceService
  ) { }

  ngOnInit(): void {
    this.onProductSearch()
  }

  onProductSearch(){
    this.searchControl.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(val=>{
        return this._productServices.fetchSearchProduct(val)
      })
    )
    .subscribe({
      next: data=>{
        this.productsArr= data.products
      }
    })
  }
//  onProductSearch(){
//   this.searchControl.valueChanges
//   .subscribe(val=>{
//     console.log(val);
//     this._productServices.fetchSearchProduct(val)
//     .subscribe({
//       next : data=>{
//         console.log(data);
//       }
//     })
//   })
//  }
}
