import { Component, OnInit } from '@angular/core';
import { USER_TYPES } from 'src/constants/USER_TYPES'
import { SelectFieldOption } from './models/SelectFieldOption';
import { User } from './models/User';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title = 'qualium-test';
  private httpClient: HttpClient;
  public USER_TYPES: SelectFieldOption[] = USER_TYPES;
  public user: User = { id: 1, status: 1 };

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  changeUserRole(userStatus: Event) {
    this.httpClient.patch<User>(`http://localhost:3000/users/${this.user.id}`, {
      status: userStatus,
    }).subscribe(updatedUser => {
      this.user = updatedUser;
    });
    location.reload();
  }

  ngOnInit(): void {
    this.httpClient.get<User[]>('http://localhost:3000/users')
      .subscribe(userList => {
          this.user = userList[0];
      });
  }
}
