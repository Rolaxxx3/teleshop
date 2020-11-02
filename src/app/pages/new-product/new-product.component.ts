import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  private httpClient: HttpClient;
  private router: Router;
  constructor(router: Router, httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.router = router;
  }

  ngOnInit():void {
    this.httpClient.get<User[]>('http://localhost:3000/users')
    .subscribe(userList => {
        if(userList[0].status !== 2)
          this.router.navigate(['/product-list']);
    });
  }
}
