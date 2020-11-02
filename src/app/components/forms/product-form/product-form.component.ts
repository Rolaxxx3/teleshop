import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() type:string;

  public form = {
    name: '',
    price: 0,
    description: '',
    photo: '',
  }
  private productId: string;
  public submitType:string;
  private httpClient: HttpClient;
  private router: Router;

  constructor(router: Router, httpClient: HttpClient) {
    this.router = router;
    this.httpClient = httpClient;
  }

  ngOnInit() {
    this.router.routerState.root.queryParams.subscribe(params => {
      this.productId = params['id'] || '';
    })
    if (this.productId) {
      this.httpClient.get(`http://localhost:3000/products/${this.productId}`)
      .subscribe(
        (product: Product) => {
          this.form.name = product.name;
          this.form.price = product.price;
          this.form.description = product.description;
          this.form.photo = product.photo;
        },
        (e) => {
          console.error(e);
          this.router.navigate(['/product-list']);
        })
    }
  }

  setSubmitType (type:string) {
    this.submitType = type;
  }

  formValidator ():Boolean {
    return Boolean(this.form.name && this.form.price && this.form.description && this.form.photo);
  }

  onChange (field:string, e: Event):void {
    switch (field) {
      case 'name': {
        this.form.name = String(e);
        break;
      }
      case 'price': {
        this.form.price = Number(e);
        break;
      }
      case 'description': {
        this.form.description = String(e);
        break;
      }
      case 'photo': {
        this.form.photo = String(e);
        break;
      }
      default: {
        return;
      }
    }
  }
  submit (e:Event) {
    e.preventDefault();
    if (this.submitType !== 'delete') {
      if (!this.formValidator()) {
        alert('Please fill all fields')
        return;
      }
    }
    switch (this.submitType) {
      case 'delete': {
        if (this.productId) {
          this.httpClient.delete(`http://localhost:3000/products/${this.productId}`).subscribe();
        }
        break;
      }
      case 'update': {
        if (this.productId) {
          this.httpClient.patch(`http://localhost:3000/products/${this.productId}`, this.form).subscribe();
        }
        break;
      }
      case 'save': {
        this.httpClient.post('http://localhost:3000/products', this.form).subscribe();
        break;
      }
    }
    this.router.navigate(['/product-list']);
  }
}
