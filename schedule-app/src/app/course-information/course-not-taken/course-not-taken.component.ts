import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-course-not-taken',
  templateUrl: './course-not-taken.component.html',
  styleUrls: ['./course-not-taken.component.css']
})
export class CourseNotTakenComponent implements OnInit {
  course: String;
  term: String;
  students: [Student];

  loadStudents() {
    this.studentService.getCourseNotTakenInfo(this.course, this.term)
    .subscribe(students => {
      this.students = students;
    });
  }

  constructor(private studentService: StudentService,
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
