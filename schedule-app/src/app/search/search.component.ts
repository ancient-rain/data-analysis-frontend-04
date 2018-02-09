import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {

    errorMessage: string;
    groups = ['faculty', 'student'];
    terms = ['201630', '201710'];

    public searchForm = this.fb.group({
        group: ['', Validators.compose([Validators.required])],
        username: ['', Validators.compose([Validators.required])],
        term: ['', Validators.compose([Validators.required])]
    });

    constructor(public fb: FormBuilder, private router: Router) { }

    search(value) {
        if (this.searchForm.valid) {
            this.router.navigate(['/', value.group, value.username, value.term]);
        }
    }
}
