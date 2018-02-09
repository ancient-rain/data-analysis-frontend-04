import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { EmitterService } from '../../services/emitter.service';
import { FilterDataService } from '../../services/filter-data.service';
import { Course } from '../../models/course';
import { Term } from '../../models/term';

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
  previousTerm: Term;
  curTerm: Term;
  nextTerm: Term;

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
        this.schedule = new Map<string, string>();
        this.previousTerm = new Term('', '', '', '', '');
        this.curTerm = new Term('', '', '', '', '');
        this.nextTerm = new Term('', '', '', '', '');

        this.updateTerms(data.terms, data.term);
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

  updateTerms(terms, term) {
    for (let i = 0; i < terms.length; i++) {
      if (terms[i].term === term) {
        this.curTerm = terms[i];
        this.setPreviousTerm(terms, i);
        this.setNextTerm(terms, i);
        break;
      }
    }
  }

  setPreviousTerm(terms, index) {
    if (index !== 0) {
      this.previousTerm = terms[index - 1];
    }
  }

  setNextTerm(terms, index) {
    if (index !== terms.length - 1) {
      this.nextTerm = terms[index + 1];
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
