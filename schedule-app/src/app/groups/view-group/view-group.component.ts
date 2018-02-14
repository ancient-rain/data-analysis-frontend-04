import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { GroupService } from '../../services/group.service';
import { FilterDataService } from '../../services/filter-data.service';
import { Group } from '../../models/group';

@Component({
    selector: 'app-view-group',
    templateUrl: './view-group.component.html',
    styleUrls: ['./view-group.component.css']
})
export class ViewGroupComponent implements OnInit {
    group: Group;
    id: string;
    term: string;
    schedule: Map<string, string>;
    days: string[];
    hours: number[];
    finalLength: number;

    constructor(private groupService: GroupService,
        private filterService: FilterDataService,
        private router: Router,
        private route: ActivatedRoute) {
        this.days = this.filterService.getDays();
        this.hours = this.filterService.getHours();
        this.finalLength = this.filterService.getFinalLength();
    }

    loadGroup() {
        this.groupService.getGroupById(this.id).subscribe(group => {
            const data = group[0];

            this.group = group;
            this.term = data.term;
            this.schedule = new Map<string, string>();

            this.filterClasses(data);
            this.filterService.updateSchedule(this.schedule, data.courses);
            console.log(this.schedule);
        });
    }

    filterClasses(data: any) {
        for (let i = 0; i < data.courses.length; i++) {
            const course = data.courses[i];
            const classTime = this.filterService.getClassTime(course);
            course.filteredTimes = classTime;
        }
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.loadGroup();
        });
    }

}
