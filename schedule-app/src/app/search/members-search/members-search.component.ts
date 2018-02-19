import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-members-search',
    templateUrl: './members-search.component.html',
    styleUrls: ['./members-search.component.css']
})
export class MembersSearchComponent {

    errorMessage: string;
    terms = ['201630', '201710'];
    members = [];
    membersEmpty = true;

    public searchForm = this.fb.group({
        members: [''],
        term: ['', Validators.compose([Validators.required])]
    });

    constructor(public fb: FormBuilder, private router: Router) { }

    search(value) {
        if (this.searchForm.valid) {
            if (this.checkArrays()) {
                const namePath = this.createNamesPath();
                console.log('/students/' + value.term + namePath);
                this.router.navigate(['/students', value.term, namePath]);
            }
        }
    }

    createNamesPath() {
        let str = '';

        for (let i = 0; i < this.members.length; i++) {
            str += `/${this.members[i]}`;
        }

        return str;
    }

    addMember(member) {
        const isExisting = this.isExisting(this.members, member);
        if (!isExisting && member) {
            this.members.push(member.toUpperCase());
            this.searchForm.controls.members.reset();
        }
    }

    removeMember(member) {
        this.removeUsername(this.members, member);
    }

    isExisting(array: any[], value: any) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    }

    isEmpty(array: any[]) {
        return array.length === 0;
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
