import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
    previousUrl: string;

    constructor(private authService: AuthService) { }

    signIn() {
        this.authService.signIn();
    }

}
