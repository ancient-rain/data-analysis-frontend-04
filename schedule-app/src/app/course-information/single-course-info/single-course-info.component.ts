import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Courses } from '../../models/courses';
import { CourseService } from '../../services/course.service';
import { Faculty } from '../../models/faculty';
import { FilterDataService } from '../../services/filter-data.service';
import { Term } from '../../models/term';


@Component({
  selector: 'app-single-course-info',
  templateUrl: './single-course-info.component.html',
  styleUrls: ['./single-course-info.component.css']
})
export class SingleCourseInfoComponent implements OnInit {

  private coursesUrl = '/course/:name/:term';
  name: string;
  term: string;
  course: Courses;
  schedule: Map<string, string> = new Map<string, string>();
  days: string[];
  hours: number[];
  finalLength: number;
  previousTerm: string;
  curTerm: string;
  nextTerm: string;
  students;

  constructor(private courseService: CourseService,
    private filterService: FilterDataService,
    private router: Router,
    private route: ActivatedRoute) {
    this.days = this.filterService.getDays();
    this.hours = this.filterService.getHours();
    this.finalLength = this.filterService.getFinalLength();
  }

  loadCourse() {
    this.courseService.getCoursesTermInfo(this.name, this.term)
      .subscribe(course => {
        const data = course[0];

        this.course = data;
        console.log(data.instructor.username);
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
