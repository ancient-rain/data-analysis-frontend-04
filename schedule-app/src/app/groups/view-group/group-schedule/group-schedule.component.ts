import { Component, Input, group } from '@angular/core';
import { Group } from '../../../models/group';

@Component({
    selector: 'app-group-schedule',
    templateUrl: './group-schedule.component.html',
    styleUrls: ['./group-schedule.component.css']
})
export class GroupScheduleComponent {
    @Input() group: Group;
    @Input() days: [string];
    @Input() hours: [string];
    @Input() schedule: Map<string, string>;
    curVal: string;

    constructor() {
        this.curVal = '';
    }

    hasValue(day: string, hour: string) {
        const key = `${day}-${hour}`;
        this.curVal = this.schedule.get(key);
        return this.curVal ? true : false;
    }

}
