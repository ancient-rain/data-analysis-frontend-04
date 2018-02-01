import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Faculty } from '../../../models/faculty';
import { Course } from '../../../models/course';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-faculty-course-info',
  templateUrl: './faculty-course-info.component.html',
  styleUrls: ['./faculty-course-info.component.css']
})
export class FacultyCourseInfoComponent  {
  @Input() faculty: Faculty;

  constructor(private router: Router) { }

  openCourseTermInfo(course: Course) {
    this.router.navigate(['course', course.name, course.term]);
  }

  openFacultyInfo(faculty: Faculty) {
    this.router.navigate(['faculty', faculty.username]);
  }

}
