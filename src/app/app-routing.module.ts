import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componants/home/home.component';
import { ProductSearchComponent } from './componants/product-search/product-search.component';
import { ShowSearchComponent } from './componants/show-search/show-search.component';

const routes: Routes = [
  {path: 'home',
    component: HomeComponent
  },
  {path: ' ',
    component: HomeComponent
  },
    {path: 'product-search',
    component: ProductSearchComponent
  },
    {path: 'show-search',
    component: ShowSearchComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
