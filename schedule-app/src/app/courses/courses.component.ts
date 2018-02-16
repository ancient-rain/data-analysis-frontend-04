import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CourseService } from '../services/course.service';
import { Courses } from '../models/courses';
import { Faculty } from '../models/faculty';
import { Term } from '../models/term';


@Component({
    selector: 'app-course',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CourseComponent implements OnInit {

    name: string;
    term: string;
    course: Courses[];
    courses: Courses[];
    previousTerm: string;
    curTerm: string;
    nextTerm: string;
    students;

    constructor(private courseService: CourseService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    loadCourse() {
        this.courseService.getCoursesTermInfo(this.name, this.term)
            .subscribe(courses => {
                const data = courses[0];

                this.course = [data];
                this.courses = courses;
                this.students = data.students;
                this.previousTerm = '';
                this.curTerm = '';
                this.nextTerm = '';

                this.updateTerms(data.terms, data.term[0]);
            },
                err => {
                    this.router.navigate(['not-found']);
                });
    }

    updateTerms(terms, term) {
        for (let i = 0; i < terms.length; i++) {
            if (terms[i] === term.term) {
                this.curTerm = term.name;
                this.setPreviousTerm(terms, i);
                this.setNextTerm(terms, i);
                break;
            }
        }
    }

    setPreviousTerm(terms, index) {
        if (index !== 0) {
            this.previousTerm = terms[index - 1];
        }
    }

    setNextTerm(terms, index) {
        if (index !== terms.length - 1) {
            this.nextTerm = terms[index + 1];
        }
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.name = params['name'];
            this.term = params['term'];
            this.loadCourse();
        });
    }

}
