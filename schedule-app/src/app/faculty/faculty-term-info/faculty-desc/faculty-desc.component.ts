import { Component, Input } from '@angular/core';
import { Faculty } from '../../../models/faculty';

@Component({
  selector: 'app-faculty-desc',
  templateUrl: './faculty-desc.component.html',
  styleUrls: ['./faculty-desc.component.css']
})
export class FacultyDescriptionComponent {
  @Input() faculty: Faculty;

  constructor() { }

}
