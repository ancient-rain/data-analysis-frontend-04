import { AuthService } from './../../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../../../models/group';
import { GroupService } from '../../../services/group.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent implements OnInit {
  @Input() group: Group;
  @Input() term: string;
  @Input() isGroupMember: boolean;

  id: string;

  constructor(private groupService: GroupService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  delete() {
    const username = this.authService.getMyUsername();
    this.groupService.deleteGroup(this.id);
    this.router.navigate(['/student', username]);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.id = params['id'];
    });
}
}
