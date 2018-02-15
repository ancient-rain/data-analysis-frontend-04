import { Component, Input } from '@angular/core';
import { Group } from '../../../models/group';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent {
  @Input() group: Group;
  @Input() term: string;

  constructor() { }

}
