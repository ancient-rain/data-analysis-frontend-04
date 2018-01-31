import { Component, Input } from '@angular/core';
import { Faculty } from '../../../models/faculty';

@Component({
  selector: 'app-faculty-info',
  templateUrl: './faculty-info.component.html',
  styleUrls: ['./faculty-info.component.css']
})
export class FacultyInfoComponent {
  @Input() faculty: Faculty;

  constructor() { }

}
