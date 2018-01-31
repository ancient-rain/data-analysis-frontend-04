import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';


@Component({
  selector: 'app-course-information',
  templateUrl: './course-information.component.html',
  styleUrls: ['./course-information.component.css']
})
export class CourseInformationComponent implements OnInit {

  private coursesUrl = '/courses/:name/:term';
  name: string;
  term: string;
  courses: Course[];
  schedule: Map<string, string> = new Map<string, string>();
  days: [string];
  hours: [number];
  finalLength: number;

  constructor(private courseService: CourseService) {
    this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.hours = [805, 900, 955, 1050, 1145, 1240, 1335, 1430, 1525, 1620];
    this.finalLength = 400;
    this.getHeaders();
   }

  getHeaders() {
    const url = window.location.href;
    const params = url.split('/');
    this.name = params[params.length - 2];
    this.term = params[params.length - 1];
  }

  loadCourses() {
    this.courseService.getCoursesTermInfo(this.name, this.term)
    .subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);

      for (let i = 0; i < this.courses.length; i++) {
        const course = this.courses[i];
        let courseTime = course.meetTimes;
        courseTime = courseTime.replace(/  /g, ' ');
        const times = courseTime.split(' ');
        const classTime = this.filterClass(courseTime, times);
        course.filteredTimes = classTime;
    }},
  err => {
    console.log(err);
  });
  }

  filterClass(courseTime: string, times: string[]) {
    for (let j = 0; j < times.length; j = j + 2) {
      const days = times[j];
      const hours = times[j + 1].split('-');
      const start = parseInt(hours[0], 10);
      const end = parseInt(hours[1], 10);

      if (days.length <= 1) {
        const isFinal = this.isFinal(start, end);
        if (!isFinal) {
          return this.getFilteredClass(days, start, end);
        }
      } else {
        return this.getFilteredClass(days, start, end);
      }
    }
  }

  isFinal(start, end) {
    return end - start >= this.finalLength;
  }


  getFilteredClass(days: string, start: number, end: number) {
    let isStarted = false;
    let hoursStr = '';
    for (let j = 0; j < this.hours.length; j++) {
      if (start <= this.hours[j] && !isStarted) {
        isStarted = true;
        hoursStr += j + 1;
      } else if (end <= this.hours[j] && isStarted) {
        if (hoursStr !== `${j}`) {
          hoursStr += `-${j}`;
        }
        break;
      }
    }
    return `${days}/${hoursStr}`;
  }

  ngOnInit() {
    this.loadCourses();
  }

}
