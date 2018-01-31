import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Faculty } from '../models/faculty';
import 'rxjs/add/operator/catch';

@Injectable()
export class FacultyService {
  private domainUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

}
