import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-student-schedule',
  templateUrl: './student-schedule.component.html',
  styleUrls: ['./student-schedule.component.css']
})
export class StudentScheduleComponent implements OnInit {
  @Input() student: Student;
  days: [string];
  hours: [number];
  schedule;

  constructor() {
    this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.hours = [805, 900, 955, 1050, 1145, 1240, 1335, 1430, 1525, 1620];
    this.createEmptySchedule();
  }

  createEmptySchedule() {
    const scheduleDays = [];
    for (let i = 0; i < this.days.length; i++) {
      const scheduleHours = [];
      for (let j = 0; j < this.hours.length; j++) {
        const hour = {
          hour: '' + j,
          startTime: this.hours[j]
        };
        scheduleHours.push(hour);
      }
      const day = {
        day: this.days[i],
        hours: scheduleHours
      };
      scheduleDays.push(day);
    }

    this.schedule = scheduleDays;
  }

  ngOnInit() {
    console.log(this.schedule);
  }

}
