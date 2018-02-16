import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { Student } from '../../../models/student';
import { StudentInfo } from '../../../models/student-info';

@Component({
  selector: 'app-course-taken',
  templateUrl: './course-taken.component.html',
  styleUrls: ['./course-taken.component.css']
})
export class CourseTakenComponent implements OnInit {

  course: String;
  term: String;
  students: StudentInfo[];

  loadStudents() {
    this.courseService.getCourseTakenInfoAll(this.course)
      .subscribe(students => {
        this.students = students;
      });
  }

  constructor(private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.course = params['name'];
      this.term = params['term'];
      this.loadStudents();
    });
  }

}
