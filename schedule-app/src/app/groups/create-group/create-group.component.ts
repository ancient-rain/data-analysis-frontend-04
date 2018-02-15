import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { GroupService } from '../../services/group.service';

@Component({
    selector: 'app-create-group',
    templateUrl: './create-group.component.html',
    styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent {

    terms = ['201630', '201710'];
    students = [];
    facultyMembers = [];
    studentsEmpty = false;
    facultyEmpty = false;

    public groupForm = this.fb.group({
        groupName: ['', Validators.compose([Validators.required])],
        class: ['', Validators.compose([Validators.required])],
        term: ['', Validators.compose([Validators.required])],
        students: [''],
        faculty: ['']
    });

    constructor(public fb: FormBuilder,
        private groupService: GroupService,
        private router: Router) { }

    viewGroup(value) {
        if (this.groupForm.valid) {
            if (this.checkArrays()) {
                const group = {
                    groupName: value.groupName,
                    term: value.term,
                    className: value.class,
                    faculty: this.facultyMembers,
                    students: this.students
                };
                this.groupService.createGroup(group).subscribe(result => {
                    this.router.navigate(['/groups', result._id]);
                });
            }
        }
    }

    addStudent(student) {
        const isExisting = this.isExisting(this.students, student);
        if (!isExisting && student !== '') {
            this.students.push(student);
            this.groupForm.controls.students.reset();
        }
    }

    removeStudent(student) {
        this.removeUsername(this.students, student);
    }

    addFaculty(faculty) {
        const isExisting = this.isExisting(this.facultyMembers, faculty);
        if (!isExisting && faculty !== '') {
            this.facultyMembers.push(faculty);
            this.groupForm.controls.faculty.reset();
        }
    }

    removeFaculty(faculty) {
        this.removeUsername(this.facultyMembers, faculty);
    }

    isEmpty(array: any[]) {
        return array.length === 0;
    }

    isExisting(array: any[], value: any) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    }

    removeUsername(array: any[], value: any) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                array.splice(i, 1);
            }
        }
    }

    checkArrays() {
        this.isEmpty(this.students) ? this.studentsEmpty = true : this.studentsEmpty = false;
        this.isEmpty(this.facultyMembers) ? this.facultyEmpty = true : this.facultyEmpty = false;
        return !(this.studentsEmpty || this.facultyEmpty);
    }

}
