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
  terms;

  constructor(private studentService: StudentService, private router: Router) {
    this.getHeaders();
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
        const curTerms = [];
        for (let i = 0; i < this.student[0].terms.length; i++) {
          const term = this.student[0].terms[i].term;
          curTerms.push(term);
        }
        this.terms = curTerms;
      },
      err => {
        console.log(err);
      }
      );
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
