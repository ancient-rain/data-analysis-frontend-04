import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Courses } from '../models/courses';
import { CourseService } from '../services/course.service';
import { FilterDataService } from '../services/filter-data.service';


@Component({
  selector: 'app-course-information',
  templateUrl: './course-information.component.html',
  styleUrls: ['./course-information.component.css']
})
export class CourseInformationComponent implements OnInit {

  private coursesUrl = '/courses/:name/:term';
  name: string;
  term: string;
  courses: Courses[];
  schedule: Map<string, string> = new Map<string, string>();
  days: string[];
  hours: number[];
  finalLength: number;
  terms;

  constructor(private courseService: CourseService,
    private filterService: FilterDataService,
    private router: Router,
    private route: ActivatedRoute) {
    this.days = this.filterService.getDays();
    this.hours = this.filterService.getHours();
    this.finalLength = this.filterService.getFinalLength();
  }

  loadCourses() {
    this.courseService.getCoursesTermInfo(this.name, this.term)
      .subscribe(courses => {
        this.courses = courses;
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.term = params['term'];
      this.loadCourses();
    });
  }

}
