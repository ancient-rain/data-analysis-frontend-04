import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { EmitterService } from '../../services/emitter.service';

@Component({
  selector: 'app-student-term-info',
  templateUrl: './student-term-info.component.html',
  styleUrls: ['./student-term-info.component.css']
})
export class StudentTermInfoComponent implements OnInit {
  student: Student;
  username: string;
  term: string;

  constructor(private studentService: StudentService) { }

  getHeaders() {
    const url = window.location.href;
    console.log(url);
  }

  // loadStudent() {
  //   this.studentService.getStudentTermInfo(this.username, this.term)
  //     .subscribe(student =>
  //       this.student = student,
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

  ngOnInit() {
    // this.loadStudent();
  }

}
