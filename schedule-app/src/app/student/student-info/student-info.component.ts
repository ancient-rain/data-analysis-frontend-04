import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentInfo } from '../../models/student-info';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  username: string;
  info: StudentInfo;

  constructor(private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute) { }

  loadStudent() {
    this.studentService.getStudentInfo(this.username).subscribe(student => {
      this.info = student;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.loadStudent();
    });
  }

}
