import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Faculty } from '../../models/faculty';
import { Course } from '../../models/course';
import { FacultyService } from '../../services/faculty.service';
import { EmitterService } from '../../services/emitter.service';
import { FilterDataService } from '../../services/filter-data.service';

@Component({
  selector: 'app-factulty-term-info',
  templateUrl: './factulty-term-info.component.html',
  styleUrls: ['./factulty-term-info.component.css']
})
export class FactultyTermInfoComponent implements OnInit {
  faculty: Faculty;
  username: string;
  term: string;
  schedule: Map<string, string> = new Map<string, string>();
  days: [string];
  hours: [number];
  finalLength: number;
  terms;

  constructor(private facultyService: FacultyService,
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
    this.facultyService.getFacultyTermInfo(this.username, this.term)
      .subscribe(faculty => {
        const data = faculty[0];

        this.faculty = faculty;
        this.terms = data.terms;

        this.filterClasses(data);
        this.filterService.updateSchedule(this.schedule, data.courses);
        console.log(this.faculty);
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
    this.loadStudent();
  }

}
