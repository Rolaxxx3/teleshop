import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private httpClient: HttpClient;
  public productList: Product[];
  private route: ActivatedRoute;
  private pageNumber: number;
  public isRootUser: Boolean;
  constructor(httpClient: HttpClient, route: ActivatedRoute) {
    this.route = route;
    this.httpClient = httpClient;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params=> {
      this.pageNumber = params['page'] || 1;
    });
    this.httpClient.get<Product[]>(`http://localhost:3000/products?_page=${this.pageNumber}&_limit=12`)
      .subscribe(productList => {
        this.productList = productList;
    });
    this.httpClient.get<User[]>(`http://localhost:3000/users`)
      .subscribe(usersList => {
        this.isRootUser = (usersList[0].status === 2 || usersList[0].status === 3);
    });
  }
}
