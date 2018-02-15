import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Group } from '../models/group';
import { PostGroup } from '../models/post-group';
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

  createGroup(group) {
    const url = `${this.domainUrl}/groups`;
    const body = {
      groupName: group.groupName,
      term: group.term,
      className: group.className,
      faculty: group.faculty,
      students: group.students
    };
    return this.http.post<PostGroup>(url, group)
      .catch((error: any) =>
        Observable.throw(error.json().error || 'POST error'));
  }

}
