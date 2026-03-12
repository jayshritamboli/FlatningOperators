import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ShowServicesService } from 'src/app/service/show-services.service';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {

  searchControl : FormControl<any> = new FormControl()
  constructor(
    private _showsServices : ShowServicesService
  ) { }

  ngOnInit(): void {
    this.onSearch()
  }


  onSearch(){
    this.searchControl.valueChanges
    .pipe(
      // tap(val =>{console.log(val)}),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val =>{
        return this._showsServices.fetchSearchShows(val)
      })
    )
    .subscribe({
      next:data=>{
        console.log(data);
      }
    })
  }

  // onSearch(){
  //   this.searchControl.valueChanges.subscribe(val=>{
  //     this._showsServices.fetchSearchShows(val)
  //     .subscribe({
  //       next: data=>{
  //         console.log(data);
          
  //       }
  //     })

  //   })
  // }
}
