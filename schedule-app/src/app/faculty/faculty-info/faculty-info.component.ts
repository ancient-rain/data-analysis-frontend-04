import { FacultyService } from './../../services/faculty.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FacultyInfo } from '../../models/faculty-info';

@Component({
  selector: 'app-faculty-info',
  templateUrl: './faculty-info.component.html',
  styleUrls: ['./faculty-info.component.css']
})
export class FacultyInfoComponent implements OnInit {
  username: string;
  info: FacultyInfo;

  constructor(private facultyService: FacultyService,
    private router: Router,
    private route: ActivatedRoute) { }

  loadStudent() {
    this.facultyService.getFacultyInfo(this.username).subscribe(faculty => {
      this.info = faculty;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.loadStudent();
    });
  }

}
