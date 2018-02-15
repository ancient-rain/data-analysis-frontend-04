import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Student } from '../models/student';
import { StudentInfo } from '../models/student-info';
import 'rxjs/add/operator/catch';

@Injectable()
export class StudentService {
  private domainUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getStudentInfo(username: String): Observable<StudentInfo> {
    const url = `${this.domainUrl}/student/${username}`;
    return this.http.get<StudentInfo>(url)
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error'));
  }

  getStudentTermInfo(username: String, term: String): Observable<Student> {
    const url = `${this.domainUrl}/student/${username}/${term}`;
    return this.http.get<Student>(url)
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error'));
  }

}
