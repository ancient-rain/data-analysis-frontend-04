import { Component, Input } from '@angular/core';
import { Student } from '../../../models/student';
import { Course } from '../../../models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-course-info',
  templateUrl: './student-course-info.component.html',
  styleUrls: ['./student-course-info.component.css']
})
export class StudentCourseInfoComponent {
  @Input() student: Student;

  constructor(private router: Router) { }

  openCourseTermInfo(course: Course) {
    this.router.navigate(['course', course.name, course.term]);
  }

  openFacultyTermInfo(course: Course) {
    this.router.navigate(['faculty', course.instructor, course.term]);
  }

}
