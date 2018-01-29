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
  @Input() username: string;
  @Input() term: string;
  days: [string];
  hours: [number];
  schedule;
  finalLength: 400;

  constructor() {
    this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.hours = [805, 900, 955, 1050, 1145, 1240, 1335, 1430, 1525, 1620];
    // this.createEmptySchedule();
  }

  // createEmptySchedule() {
  //   const scheduleDays = [];
  //   for (let i = 0; i < this.days.length; i++) {
  //     const scheduleHours = [];
  //     for (let j = 0; j < this.hours.length; j++) {
  //       const hour = {
  //         hour: '' + j,
  //         startTime: this.hours[j],
  //         class: ''
  //       };
  //       scheduleHours.push(hour);
  //     }
  //     const day = {
  //       day: this.days[i],
  //       hours: scheduleHours
  //     };
  //     scheduleDays.push(day);
  //   }

  //   this.schedule = scheduleDays;
  //   for (let i = 0; i < this.days.length; i++) {
  //     const scheduleHours = [];
  //     for (let j = 0; j < this.hours.length; j++) {
  //       scheduleDays.push('');
  //     }
  //   }
  //   this.schedule = scheduleDays;
  // }

  // updateSchedule(courses: [Course]) {
  //   for (let i = 0; i < courses.length; i++) {
  //     let meetTimes = courses[i].meetTimes;
  //     meetTimes = meetTimes.replace(/  /g, ' ');
  //     const times = meetTimes.split(' ');

  //     for (let j = 0; j < times.length; j = j + 2) {
  //       const days = times[j];
  //       const hours = times[j + 1].split('-');
  //       const start = parseInt(hours[0], 10);
  //       const end = parseInt(hours[1], 10);

  //       if (days.length <= 1) {
  //         const isFinal = this.isFinalTime(start, end);
  //         if (!isFinal) {
  //           this.addClass(days, courses[i].name, start, end);
  //         }
  //       } else {

  //       }
  //     }
  //   }
  // }

  // isFinalTime(start, end) {
  //   return end - start >= this.finalLength;
  // }

  // addClass(days: string, name: string, start: number, end: number) {
  //   const daysList = days.split('(?!^)');
  //   for (let i = 0; i < daysList.length; i++) {
  //     const day = daysList[i];
  //     const dayIndex = this.getDayIndex(day);
  //     for (let j = 0; this.hours.length; j++) {
  //       if (start >= this.hours[j] || end <= this.hours[j]) {
  //         console.log(dayIndex);
  //       }
  //     }
  //   }
  // }

  // isClass(day: string, hour: number, courses: [Course]) {

  // }

  // getDayIndex(day: string) {
  //   if (day === 'M') {
  //     return 0;
  //   } else if (day === 'T') {
  //     return 10;
  //   } else if (day === 'W') {
  //     return 20;
  //   } else if (day === 'R') {
  //     return 30;
  //   } else if (day === 'F') {
  //     return 40;
  //   } else {
  //     return 50;
  //   }
  // }

  isStudent(student: Student) {
    if (student) {
      // this.updateSchedule(student.courses);
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    console.log(this.schedule);
  }

}
