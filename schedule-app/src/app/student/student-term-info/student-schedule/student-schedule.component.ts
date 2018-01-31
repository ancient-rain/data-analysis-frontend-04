import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../../models/student';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-student-schedule',
  templateUrl: './student-schedule.component.html',
  styleUrls: ['./student-schedule.component.css']
})
export class StudentScheduleComponent implements OnInit {
  @Input() student: Student;
  @Input() days: [string];
  @Input() hours: [string];
  @Input() schedule: Map<string, string>;
  curVal: string;

  constructor() {
    this.curVal = '';
  }

  ngOnInit() { }

  getValue(day: string, hour: string) {
    const key = `${day}-${hour}`;
    this.curVal = this.schedule.get(key);
    return this.curVal;
  }

}
