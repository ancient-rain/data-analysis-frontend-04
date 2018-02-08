import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Course } from '../models/course';
import { Courses } from '../models/courses';
import 'rxjs/add/operator/catch';

@Injectable()
export class CourseService {
  private domainUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCoursesTermInfo(name: String, term: String): Observable<Course[]> {
    const url = `${this.domainUrl}/courses/${name}/${term}`;
    return this.http.get<Course[]>(url)
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error'));
  }

  getSingleCourseTermInfo(name: String, term: String): Observable<Course> {
    const url = `${this.domainUrl}/course/${name}/${term}`;
    return this.http.get<Course>(url)
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error'));
  }

}
