import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { EmitterService } from '../../services/emitter.service';
import { FilterDataService } from '../../services/filter-data.service';
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
  schedule: Map<string, string> = new Map<string, string>();
  days: [string];
  hours: [number];
  finalLength: number;
  terms;

  constructor(private studentService: StudentService,
    private filterService: FilterDataService,
    private router: Router) {
    this.days = this.filterService.getDays();
    this.hours = this.filterService.getHours();
    this.finalLength = this.filterService.getFinalLength();
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
        const data = student[0];

        this.student = student;
        this.terms = data.terms;

        this.filterClasses(data);
        this.filterService.updateSchedule(this.schedule, data.courses);
      },
      err => {
        this.router.navigate(['not-found']);
      }
      );
  }

  filterClasses(data: any) {
    for (let i = 0; i < data.courses.length; i++) {
      const course = data.courses[i];
      const classTime = this.filterService.getClassTime(course);
      course.filteredTimes = classTime;
    }
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
