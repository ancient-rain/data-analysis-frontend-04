import { Component, Input } from '@angular/core';
import { Courses } from '../../models/courses';

@Component({
    selector: 'app-course-faculty-info',
    templateUrl: './course-faculty-info.component.html',
    styleUrls: ['./course-faculty-info.component.css']
})
export class CourseFacultyInfoComponent {

    @Input() course: Courses[];

    constructor() { }

}
