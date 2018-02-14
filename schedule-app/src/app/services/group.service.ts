import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Group } from '../models/group';
import 'rxjs/add/operator/catch';

@Injectable()
export class GroupService {
  private domainUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getGroupById(id: String): Observable<Group> {
    const url = `${this.domainUrl}/groups/${id}`;
    return this.http.get<Group>(url)
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error'));
  }

}
