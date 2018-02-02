import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { Faculty } from '../../models/faculty';
import { Course } from '../../models/course';
import { FacultyService } from '../../services/faculty.service';
import { EmitterService } from '../../services/emitter.service';
import { FilterDataService } from '../../services/filter-data.service';

@Component({
  selector: 'app-faculty-term-info',
  templateUrl: './faculty-term-info.component.html',
  styleUrls: ['./faculty-term-info.component.css']
})
export class FacultyTermInfoComponent implements OnInit {
  faculty: Faculty;
  username: string;
  term: string;
  schedule: Map<string, string>;
  days: [string];
  hours: [number];
  finalLength: number;
  terms;

  constructor(private facultyService: FacultyService,
    private filterService: FilterDataService,
    private router: Router,
    private route: ActivatedRoute) {
    this.days = this.filterService.getDays();
    this.hours = this.filterService.getHours();
    this.finalLength = this.filterService.getFinalLength();
  }

  loadStudent() {
    this.facultyService.getFacultyTermInfo(this.username, this.term)
      .subscribe(faculty => {
        const data = faculty[0];

        this.faculty = faculty;
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
