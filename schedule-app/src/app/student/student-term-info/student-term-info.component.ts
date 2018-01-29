import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { EmitterService } from '../../services/emitter.service';

@Component({
  selector: 'app-student-term-info',
  templateUrl: './student-term-info.component.html',
  styleUrls: ['./student-term-info.component.css']
})
export class StudentTermInfoComponent implements OnInit {
  private termId = 'SWITCH_TERM';
  student: Student;
  username: string;
  term: string;
  terms: [string];

  constructor(private studentService: StudentService, private router: Router) {
    this.getHeaders();
    /* will have to add information to get the list of the student's terms that they have been in */
    this.terms = ['201410', '201420', '201430', '201510', '201520', '201530',
      '201610', '201620', '201630', '201710', '201720', '201730'];
  }

  getHeaders() {
    const url = window.location.href;
    const params = url.split('/');
    this.username = params[params.length - 2];
    this.term = params[params.length - 1];
  }

  loadStudent() {
    this.studentService.getStudentTermInfo(this.username, this.term)
      .subscribe(student => {
        this.student = student;
      },
      err => {
        console.log(err);
      }
      );
  }

  isCurrentTerm(term: string) {
    console.log(this.term === term ? true : false);
    return this.term === term ? true : false;
  }

  switchTerm(term: string) {
    this.router.navigate(['student', this.username, term]);
    /* without refreshing it won't load new content, not sure why */
    document.location.reload(true);
  }

  ngOnInit() {
    this.loadStudent();
  }

}
