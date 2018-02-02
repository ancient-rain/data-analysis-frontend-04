import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

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
  schedule: Map<string, string>;
  days: [string];
  hours: [number];
  finalLength: number;
  terms;

  constructor(private studentService: StudentService,
    private filterService: FilterDataService,
    private router: Router,
    private route: ActivatedRoute) {
    this.days = this.filterService.getDays();
    this.hours = this.filterService.getHours();
    this.finalLength = this.filterService.getFinalLength();
  }

  loadStudent() {
    this.studentService.getStudentTermInfo(this.username, this.term)
      .subscribe(student => {
        const data = student[0];

        this.student = student;
        this.terms = data.terms;
        this.schedule = new Map<string, string>();

        this.filterClasses(data);
        this.filterService.updateSchedule(this.schedule, data.courses);
      },
      err => {
        this.router.navigate(['not-found']);
      });
  }

  filterClasses(data: any) {
    for (let i = 0; i < data.courses.length; i++) {
      const course = data.courses[i];
      const classTime = this.filterService.getClassTime(course);
      course.filteredTimes = classTime;
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.term = params['term'];
      this.loadStudent();
    });
  }

}
