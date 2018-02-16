import { Component, Input } from '@angular/core';
import { Courses } from '../../models/courses';

@Component({
    selector: 'app-course-info',
    templateUrl: './course-info.component.html',
    styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent {

    @Input() courses: Courses[];
    @Input() term: string;

    constructor() { }

}
