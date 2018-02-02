import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../models/user';
import 'rosefire';

@Injectable()
export class AuthService {
  user: User;
  isSignedIn = false;

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

      this.user.email = rfUser.email;
      this.user.group = rfUser.group;
      this.user.name = rfUser.name;
      this.user.token = rfUser.token;
      this.user.username = rfUser.username;
      this.isSignedIn = true;

      localStorage.setItem('token', this.user.token);

      /* remove hardcoded term when route is available */
      this.router.navigate([
        `/${rfUser.group.toLowerCase()}`,
        rfUser.username,
        '201710'
      ]);
    });
  }

  signOut() {
    localStorage.setItem('token', '');
    this.user = {
      email: '',
      group: '',
      name: '',
      token: '',
      username: ''
    };
    this.isSignedIn = false;
    this.router.navigate(['signin']);
  }

  getEmail() {
    return this.user.email;
  }

  getGroup() {
    return this.user.group;
  }

  getName() {
    return this.user.name;
  }

  getToken() {
    return this.user.token;
  }

  getUsername() {
    return this.user.username;
  }

}
