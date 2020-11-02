import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  private httpClient: HttpClient;
  private router: Router;
  private productId: number;
  constructor(router: Router, httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.router = router;
  }
  ngOnInit() {
    this.httpClient.get<User[]>('http://localhost:3000/users')
    .subscribe(userList => {
        if (userList[0].status === 1)
          this.router.navigate(['/product-list']);
    });
    this.router.routerState.root.queryParams.subscribe(params => {
      this.productId = parseInt(params['id']) || NaN;
    })
    if (Number.isNaN(this.productId)) {
      this.router.navigate(['/product-list']);
    }
  }
}
