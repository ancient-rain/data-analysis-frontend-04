import { Component } from '@angular/core';
import 'rosefire-node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSignedIn: boolean;

  constructor() {
  }

  // signIn() {
  //   Rosefire.signIn("80d5f635-1347-419f-927b-8f9cfd52d4fb", (err, rfUser) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     } else {
  //       console.log(rfUser.token);
  //     }

  //   });
  // }
}
