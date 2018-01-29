import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../../models/student';


@Component({
  selector: 'app-student-schedule',
  templateUrl: './student-schedule.component.html',
  styleUrls: ['./student-schedule.component.css']
})
export class StudentScheduleComponent implements OnInit {
  @Input() student: Student;

  constructor() { }

  ngOnInit() {
  }

}
