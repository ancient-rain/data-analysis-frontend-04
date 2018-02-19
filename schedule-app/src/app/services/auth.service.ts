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
      localStorage.setItem('my-username', rfUser.username.toUpperCase());
      localStorage.setItem('group', rfUser.group);

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
    localStorage.removeItem('my-username');
    localStorage.removeItem('group');

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

  getName() {
    return localStorage.getItem('name');
  }

  getToken() {
    return this.user.token;
  }

  getUsername() {
    return this.user.username;
  }

  getMyUsername() {
    if (localStorage.getItem('my-username')) {
      return `${localStorage.getItem('my-username')}`;
    }
    return '/';
  }

  getGroup() {
    return localStorage.getItem('group');
  }

  checkUsername(username) {
    return localStorage.getItem('my-username') === username;
  }

}
