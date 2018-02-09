import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Course } from '../../models/course';
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
  course: Course;
  schedule: Map<string, string> = new Map<string, string>();
  days: string[];
  hours: number[];
  finalLength: number;
  previousTerm: Term;
  curTerm: Term;
  nextTerm: Term;

  constructor(private courseService: CourseService,
    private filterService: FilterDataService,
    private router: Router,
    private route: ActivatedRoute) {
    this.days = this.filterService.getDays();
    this.hours = this.filterService.getHours();
    this.finalLength = this.filterService.getFinalLength();
  }

  loadCourse() {
    this.courseService.getSingleCourseTermInfo(this.name, this.term)
      .subscribe(course => {
        const data = course[0];
        const classTime = this.filterService.getClassTime(data);

        data.filteredTimes = classTime;
        this.course = course;
        this.previousTerm = new Term('', '', '', '', '');
        this.curTerm = new Term('', '', '', '', '');
        this.nextTerm = new Term('', '', '', '', '');

        this.updateTerms(data.terms, data.term);
      },
        err => {
          this.router.navigate(['not-found']);
        });
  }

  updateTerms(terms, term) {
    for (let i = 0; i < terms.length; i++) {
      if (terms[i].term === term) {
        this.curTerm = terms[i];
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
