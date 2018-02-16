import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../models/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-student-info',
  templateUrl: './course-student-info.component.html',
  styleUrls: ['./course-student-info.component.css']
})
export class CourseStudentInfoComponent implements OnInit {

  @Input() students: [Student];

  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.students = params['students'];
    });
   }



  ngOnInit() {
  }

}
