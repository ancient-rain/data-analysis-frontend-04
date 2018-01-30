import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Course } from '../models/course';


@Component({
  selector: 'app-course-information',
  templateUrl: './course-information.component.html',
  styleUrls: ['./course-information.component.css']
})
export class CourseInformationComponent implements OnInit {

  private coursesUrl = '/courses/:name/:term';

  constructor(private http: HttpClient) { }

    getCourses(): Observable<Course[]> {
      // ...using get request
      return this.http.get<Course[]>
        (this.coursesUrl)
      // ...errors if any
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error'));
  }

  ngOnInit() {
  }

}
