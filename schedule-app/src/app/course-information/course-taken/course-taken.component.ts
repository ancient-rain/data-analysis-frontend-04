import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../../models/student';

@Component({
  selector: 'app-course-taken',
  templateUrl: './course-taken.component.html',
  styleUrls: ['./course-taken.component.css']
})
export class CourseTakenComponent implements OnInit {

  course: String;
  term: String;
  students: [Student];

  loadStudents() {
    this.studentService.getCourseTakenInfo(this.course, this.term)
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
