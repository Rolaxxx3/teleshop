import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.css']
})
export class PageNavigationComponent implements OnInit {

  private httpClient: HttpClient;
  public pages : Array<number>;
  private router: Router;
  public currentPage: number;
  constructor(httpClient: HttpClient, router: Router) {
    this.router = router;
    this.httpClient = httpClient;
  }

  setCurrentPage() {
    this.router.routerState.root.queryParams.subscribe(params => {
      this.currentPage = parseInt(params['page']) || 1;
    })
  }

  ngOnInit() {
    this.setCurrentPage();
    this.httpClient.get<Product[]>('http://localhost:3000/products')
    .subscribe(productList => {
        let productsLength = productList.length;
        let pages = [];
        let counter = 0;
        while (productsLength > 0) {
          counter++;
          productsLength -= 12;
          pages.push(counter);
        }
        this.pages = pages;
    });
  }
}
