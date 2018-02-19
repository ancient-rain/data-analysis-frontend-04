import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-course-search',
    templateUrl: './course-search.component.html',
    styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent {

    errorMessage: string;
    terms = ['201630', '201710'];

    public courseForm = this.fb.group({
        course: ['', Validators.compose([Validators.required])],
        term: ['', Validators.compose([Validators.required])]
    });

    constructor(public fb: FormBuilder, private router: Router) { }

    search(value) {
        if (this.courseForm.valid) {
            this.router.navigate([
                '/course',
                value.course.toUpperCase(),
                value.term
            ]);
        }
    }
}
