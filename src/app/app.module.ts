import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule }   from '@angular/common/http';
import { PageNavigationComponent } from './components/page-navigation/page-navigation.component';
import { SelectFieldComponent } from './components/fields/select-field/select-field.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { InputFieldComponent } from './components/fields/input-field/input-field.component';
import { ProductFormComponent } from './components/forms/product-form/product-form.component';
import { TextareaFieldComponent } from './components/fields/textarea-field/textarea-field.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ProductAboutComponent } from './pages/product-about/product-about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    PageNavigationComponent,
    SelectFieldComponent,
    NewProductComponent,
    InputFieldComponent,
    ProductFormComponent,
    TextareaFieldComponent,
    EditProductComponent,
    ProductAboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
