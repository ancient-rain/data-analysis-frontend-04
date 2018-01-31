import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-course-student-info',
  templateUrl: './course-student-info.component.html',
  styleUrls: ['./course-student-info.component.css']
})
export class CourseStudentInfoComponent implements OnInit {

  @Input() students: [Student];

  constructor() {
  }


  ngOnInit() {
  }

}
