import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-faculty-info',
  templateUrl: './course-faculty-info.component.html',
  styleUrls: ['./course-faculty-info.component.css']
})
export class CourseFacultyInfoComponent implements OnInit {
  @Input() course: Course;


  constructor() { }

  ngOnInit() {
  }

}
