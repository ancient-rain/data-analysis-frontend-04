import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Course } from '../models/course';
import { Courses } from '../models/courses';
import { StudentInfo } from '../models/student-info';
import 'rxjs/add/operator/catch';

@Injectable()
export class CourseService {
  private domainUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCoursesTermInfo(name: String, term: String): Observable<Courses[]> {
    const url = `${this.domainUrl}/course/${name}/${term}`;
    return this.http.get<Courses[]>(url)
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error'));
  }

  getCourseTakenInfoAll(course: String): Observable<[StudentInfo]> {
    const url = `${this.domainUrl}/course/${course}/students-taken/all`;
    return this.http.get<StudentInfo>(url)
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error'));
  }

  getCourseTakenInfoYear(course: String, year: String): Observable<[StudentInfo]> {
    const url = `${this.domainUrl}/course/${course}/students-taken/${year}`;
    return this.http.get<StudentInfo>(url)
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error'));
  }

  getCourseNotTakenInfo(course: String): Observable<[StudentInfo]> {
    const url = `${this.domainUrl}/course/${course}/students-not-taken/all`;
    return this.http.get<StudentInfo>(url)
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error'));
  }

  getCourseNotTakenInfoYear(course: String, year: String): Observable<[StudentInfo]> {
    const url = `${this.domainUrl}/course/${course}/students-not-taken/${year}`;
    return this.http.get<StudentInfo>(url)
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error'));
  }

}
