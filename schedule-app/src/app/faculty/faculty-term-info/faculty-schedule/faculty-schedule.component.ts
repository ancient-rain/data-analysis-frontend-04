import { Component, Input } from '@angular/core';
import { Faculty } from '../../../models/faculty';
import { FilterDataService } from '../../../services/filter-data.service';

@Component({
  selector: 'app-faculty-schedule',
  templateUrl: './faculty-schedule.component.html',
  styleUrls: ['./faculty-schedule.component.css']
})
export class FacultyScheduleComponent {
  // @Input() faculty: Faculty;
  @Input() schedule: Map<string, string>;
  hours: [number];
  days: [string];
  curVal: string;

  constructor(private filterService: FilterDataService) {
    this.hours = this.filterService.getHours();
    this.days = this.filterService.getDays();
    this.curVal = '';
  }

  getValue(day: string, hour: string) {
    const key = `${day}-${hour}`;
    this.curVal = this.schedule.get(key);
    return this.curVal;
  }

}
