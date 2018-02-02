import { Component, Input } from '@angular/core';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-student-term-information',
  templateUrl: './student-term-information.component.html',
  styleUrls: ['./student-term-information.component.css']
})
export class StudentTermInformationComponent {
  @Input() student: Student;

  constructor() { }

}
