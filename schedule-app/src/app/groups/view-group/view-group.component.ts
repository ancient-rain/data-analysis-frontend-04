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
    schedule: Map<string, any[]>;
    courseMap: Map<string, any[]>;
    days: string[];
    hours: number[];
    finalLength: number;
    students = [];

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
            this.schedule = new Map<string, any[]>();
            this.courseMap = new Map<string, any[]>();

            this.filterClasses(data);
            this.filterService.updateSchedule(this.schedule, data.courses);
            this.createCourseMap(data.students, data.courses);
            this.updateStudents(data.students);
        });
    }

    filterClasses(data: any) {
        for (let i = 0; i < data.courses.length; i++) {
            const course = data.courses[i];
            const classTime = this.filterService.getClassTime(course);
            course.filteredTimes = classTime;
        }
    }

    createCourseMap(students, courses) {
        for (let i = 0; i < courses.length; i++) {
            this.courseMap.set(courses[i].name, []);
        }

        for (let i = 0; i < students.length; i++) {
            const student = students[i];
            for (let j = 0; j < student.courses.length; j++) {
                const course = student.courses[j];
                const value = this.courseMap.get(course);
                value.push(student.username);
                this.courseMap.set(course, value);
            }
        }
    }

    updateStudents(members) {
        for (let i = 0; i < members.length; i++) {
            this.students.push(members[i].username);
        }
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.loadGroup();
        });
    }

}
