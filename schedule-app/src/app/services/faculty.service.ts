import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Faculty } from '../models/faculty';
import 'rxjs/add/operator/catch';

@Injectable()
export class FacultyService {
  private domainUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getFacultyTermInfo(username: string, term: string): Observable<Faculty> {
    const url = `${this.domainUrl}/faculty/${username}/${term}`;
    return this.http.get<Faculty>(url)
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error'));
  }

}
