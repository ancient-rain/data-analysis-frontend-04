import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-view-group',
    templateUrl: './view-group.component.html',
    styleUrls: ['./view-group.component.css']
})
export class ViewGroupComponent {

    constructor(private router: Router) { }

}
