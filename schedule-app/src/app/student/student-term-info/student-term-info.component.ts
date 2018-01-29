import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { EmitterService } from '../../services/emitter.service';
import { Course } from '../../models/course';

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
  schedule: Map<string, string> = new Map<string, string>();
  days: [string];
  hours: [number];
  finalLength: number;

  constructor(private studentService: StudentService, private router: Router) {
    this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.hours = [805, 900, 955, 1050, 1145, 1240, 1335, 1430, 1525, 1620];
    this.finalLength = 400;
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
        this.student[0].majors.pop();
        this.student[0].minors.pop();
        this.updateSchedule(this.student[0].courses);
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

  updateSchedule(courses: [Course]) {
    for (let i = 0; i < courses.length; i++) {
      let meetTimes = courses[i].meetTimes;
      meetTimes = meetTimes.replace(/  /g, ' ');
      const times = meetTimes.split(' ');

      for (let j = 0; j < times.length; j = j + 2) {
        const days = times[j];
        const hours = times[j + 1].split('-');
        const start = parseInt(hours[0], 10);
        const end = parseInt(hours[1], 10);

        if (days.length <= 1) {
          const isFinal = this.isFinal(start, end);
          if (!isFinal) {
            this.addClass(days, courses[i].name, start, end);
          }
        } else {
          this.addClass(days, courses[i].name, start, end);
        }
      }
    }
  }

  isFinal(start, end) {
    return end - start >= this.finalLength;
  }

  addClass(days: string, name: string, start: number, end: number) {
    for (let i = 0; i < days.length; i++) {
      const day = this.getDay(days.charAt(i));
      let isStarted = false;
      for (let j = 0; j < this.hours.length; j++) {
        if (start <= this.hours[j] && !isStarted) {
          this.schedule.set(`${day}-${this.hours[j]}`, `${name}`);
          isStarted = true;
        } else if (end >= this.hours[j] && isStarted) {
          this.schedule.set(`${day}-${this.hours[j]}`, `${name}`);
        } else if (end <= this.hours[j] && isStarted) {
          break;
        }
      }
    }
  }

  getDay(day: string) {
    if (day === 'M') {
      return 'Monday';
    } else if (day === 'T') {
      return 'Tuesday';
    } else if (day === 'W') {
      return 'Wednesday';
    } else if (day === 'R') {
      return 'Thursday';
    } else if (day === 'F') {
      return 'Friday';
    } else {
      return 'Saturday';
    }
  }

  ngOnInit() {
    this.loadStudent();
  }

}
