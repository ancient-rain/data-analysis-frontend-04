import { Component, Input } from '@angular/core';
import { Group } from '../../../models/group';

@Component({
  selector: 'app-group-courses',
  templateUrl: './group-courses.component.html',
  styleUrls: ['./group-courses.component.css']
})
export class GroupCoursesComponent {
  @Input() group: Group;
  @Input() term: string;

  constructor() { }

}
