import { Component, Input } from '@angular/core';
import { Student } from '../../models/student';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-course-student-info',
    templateUrl: './course-student-info.component.html',
    styleUrls: ['./course-student-info.component.css']
})
export class CourseStudentInfoComponent {

    @Input() students;

    constructor() { }

}
