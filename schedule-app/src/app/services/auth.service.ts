import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../models/user';
import 'rosefire';

@Injectable()
export class AuthService {
  user: User;

  constructor(private router: Router) {
    this.user = {
      email: '',
      group: '',
      name: '',
      token: '',
      username: ''
    };
  }

  signIn() {
    Rosefire.signIn(environment.registryToken, (error, rfUser: RosefireUser) => {
      if (error) {
        console.error(error);
        return;
      }

      localStorage.setItem('token', rfUser.token);
      localStorage.setItem('name', rfUser.name);

      this.user.email = rfUser.email;
      this.user.group = rfUser.group;
      this.user.name = rfUser.name;
      this.user.token = rfUser.token;
      this.user.username = rfUser.username;

      this.router.navigate(['/']);
    });
  }

  isSignedIn() {
    return localStorage.getItem('token') ? true : false;
  }

  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');

    this.user = {
      email: '',
      group: '',
      name: '',
      token: '',
      username: ''
    };

    this.router.navigate(['signin']);
  }

  getEmail() {
    return this.user.email;
  }

  getGroup() {
    return this.user.group;
  }

  getName() {
    return localStorage.getItem('name');
  }

  getToken() {
    return this.user.token;
  }

  getUsername() {
    return this.user.username;
  }

}
