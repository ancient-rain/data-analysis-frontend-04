import { Component } from '@angular/core';
<<<<<<< HEAD
//import 'rosefire-node';
=======
// import 'rosefire-node';
>>>>>>> f33404d4e02b834c0a9b8753d906e004d680481f

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
