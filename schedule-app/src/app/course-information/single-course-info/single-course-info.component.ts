import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { Faculty } from '../../models/faculty';


@Component({
  selector: 'app-single-course-info',
  templateUrl: './single-course-info.component.html',
  styleUrls: ['./single-course-info.component.css']
})
export class SingleCourseInfoComponent implements OnInit {

  private coursesUrl = '/courses/:name/:term';
  name: string;
  term: string;
  course: Course;
  schedule: Map<string, string> = new Map<string, string>();
  days: [string];
  hours: [number];
  finalLength: number;
  faculty: Faculty;

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

  loadCourse() {
    this.courseService.getSingleCourseTermInfo(this.name, this.term)
      .subscribe(retCourse => {
        this.course = retCourse[0];
        console.log(this.course);
        this.faculty = this.course.advisor[0];
        console.log(this.faculty);
        let courseTime = this.course.meetTimes;
        courseTime = courseTime.replace(/  /g, ' ');
        const times = courseTime.split(' ');
        const classTime = this.filterClass(courseTime, times);
        this.course.filteredTimes = classTime;
      },
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
    this.loadCourse();
  }

}
