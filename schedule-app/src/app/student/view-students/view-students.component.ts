import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentView } from '../../models/student-view';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  term: string;
  names: string;
  info: StudentView;
  previousTerm: string;
  curTerm: string;
  nextTerm: string;

  constructor(private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute) { }

  loadStudent() {
    this.studentService.getStudents(this.term, this.names).subscribe(student => {
      this.info = student;
      this.previousTerm = '';
      this.curTerm = '';
      this.nextTerm = '';
      this.updateTerms();
    });
  }

  updateTerms() {
    this.curTerm = this.term;
    /* TODO: remove hardcoded values */
    if (this.term === '201630') {
      this.nextTerm = '201710';
    } else {
      this.previousTerm = '201630';
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.term = params['term'];
      this.names = params['name'];
      this.loadStudent();
    });
  }

}
