import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-about',
  templateUrl: './product-about.component.html',
  styleUrls: ['./product-about.component.css']
})
export class ProductAboutComponent implements OnInit {
  private httpClient: HttpClient;
  private router: Router;
  private productId: number;
  public product: Product;
  constructor(router: Router, httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.router = router;
  }
  ngOnInit() {
    this.router.routerState.root.queryParams.subscribe(params => {
      this.productId = parseInt(params['id']) || NaN;
    })
    if (Number.isNaN(this.productId)) {
      this.router.navigate(['/product-list']);
    }
    this.httpClient.get(`http://localhost:3000/products/${this.productId}`)
    .subscribe(
      (product: Product) => {
        this.product = product;
      },
      (e) => {
        console.error(e);
        this.router.navigate(['/product-list']);
      });
  }
}
