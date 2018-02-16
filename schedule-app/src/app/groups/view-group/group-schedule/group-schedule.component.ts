import { Component, Input } from '@angular/core';
import { Group } from '../../../models/group';

@Component({
    selector: 'app-group-schedule',
    templateUrl: './group-schedule.component.html',
    styleUrls: ['./group-schedule.component.css']
})
export class GroupScheduleComponent {
    @Input() days: [string];
    @Input() hours: [string];
    @Input() schedule: Map<string, any[]>;
    @Input() courseMap: Map<string, any[]>;
    classes: any[];
    students: any[];

    constructor() {
        this.classes = [];
    }

    hasValueForTime(day: string, hour: string) {
        const key = `${day}-${hour}`;
        this.classes = this.schedule.get(key);
        return this.classes;
    }

    hasMemberForClass(className: string) {
        this.students = this.courseMap.get(className);
        return this.students;
    }

    isUnvailable(day, hour) {
        return this.schedule.get(`${day}-${hour}`) ? true : false;
    }

}
