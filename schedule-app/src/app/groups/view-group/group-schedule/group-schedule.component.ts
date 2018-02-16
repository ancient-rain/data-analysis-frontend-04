import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-group-schedule',
    templateUrl: './group-schedule.component.html',
    styleUrls: ['./group-schedule.component.css']
})
export class GroupScheduleComponent {
    @Input() students: any[];
    @Input() days: [string];
    @Input() hours: [string];
    @Input() schedule: Map<string, any[]>;
    @Input() courseMap: Map<string, any[]>;
    classes: any[];
    members: any[];
    uncheckedStudents: any[];

    constructor() {
        this.classes = [];
        this.uncheckedStudents = [];
    }

    toggle(event, username) {
        if (event.checked) {
            const index = this.getIndex(username);
            this.uncheckedStudents.splice(index, 1);
        } else {
            this.uncheckedStudents.push(username);
        }
    }

    getIndex(username) {
        for (let i = 0; i < this.uncheckedStudents.length; i++) {
            const student = this.uncheckedStudents[i];
            if (student === username) {
                return i;
            }
        }
        return -1;
    }

    isChecked(member: string) {
        return this.getIndex(member) === -1;
    }

    hasValueForTime(day: string, hour: string) {
        const key = `${day}-${hour}`;
        this.classes = this.schedule.get(key);
        return this.classes;
    }

    hasMemberForClass(className: string) {
        this.members = this.courseMap.get(className);
        return this.members;
    }

    isUnvailable(day, hour) {
        return this.schedule.get(`${day}-${hour}`) ? true : false;
    }

}
