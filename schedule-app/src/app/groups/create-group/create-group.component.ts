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
    members = [];
    membersEmpty: boolean;

    public groupForm = this.fb.group({
        groupName: ['', Validators.compose([Validators.required])],
        description: ['', Validators.compose([Validators.required])],
        forClass: ['', Validators.compose([Validators.required])],
        term: ['', Validators.compose([Validators.required])],
        members: ['']
    });

    constructor(public fb: FormBuilder,
        private groupService: GroupService,
        private router: Router) { }

    viewGroup(value) {
        if (this.groupForm.valid) {
            if (!this.isEmpty(this.members)) {
                const forClass = value.forClass === 'true';
                const group = {
                    groupName: value.groupName,
                    term: value.term,
                    description: value.description,
                    forClass: forClass,
                    members: this.members
                };

                this.groupService.createGroup(group).subscribe(result => {
                    this.router.navigate(['/group', result._id]);
                });
            }
        }
    }

    addMember(member) {
        const isExisting = this.isExisting(this.members, member);
        if (!isExisting && member !== '') {
            this.members.push(member.toUpperCase());
            this.groupForm.controls.members.reset();
        }
    }

    removeMember(member) {
        this.removeUsername(this.members, member);
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
        this.membersEmpty = this.isEmpty(this.members);
        return !this.membersEmpty;
    }

}
