import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {path:"", component:ProductComponent},
  {path:"products",component:ProductComponent},
  {path:"products/productCategory/:ProductCategoryId",component:ProductComponent},
  {path:"products/gameCategory/:ProductCategoryId",component:ProductComponent},
  {path:"products/add",component:ProductAddComponent},
  {path:"login",component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
