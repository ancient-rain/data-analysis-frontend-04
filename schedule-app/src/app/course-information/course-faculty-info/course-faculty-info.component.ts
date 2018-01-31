import { Component, OnInit, Input } from '@angular/core';
import { Faculty } from '../../models/faculty';

@Component({
  selector: 'app-course-faculty-info',
  templateUrl: './course-faculty-info.component.html',
  styleUrls: ['./course-faculty-info.component.css']
})
export class CourseFacultyInfoComponent implements OnInit {
  @Input() faculty: Faculty;


  constructor() { }

  ngOnInit() {
  }

}
