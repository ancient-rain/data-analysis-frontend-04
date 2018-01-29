import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-student-course-info',
  templateUrl: './student-course-info.component.html',
  styleUrls: ['./student-course-info.component.css']
})
export class StudentCourseInfoComponent implements OnInit {
  @Input() student: Student;

  constructor() { }

  ngOnInit() {
  }

}
