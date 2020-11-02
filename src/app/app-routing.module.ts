import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component'
import { NewProductComponent } from './pages/new-product/new-product.component'
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ProductAboutComponent } from './pages/product-about/product-about.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent},
  { path: 'edit-product', component: EditProductComponent},
  { path: 'new-product', component: NewProductComponent},
  { path: 'product-about', component: ProductAboutComponent},
  { path: '**', redirectTo: 'product-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
