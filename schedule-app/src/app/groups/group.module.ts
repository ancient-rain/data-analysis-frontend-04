import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    CreateGroupComponent,
    ViewGroupComponent,
    GroupInfoComponent,
    GroupCoursesComponent,
    GroupScheduleComponent
} from './index';
import { GroupService } from '../services/group.service';


@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        FlexLayoutModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    declarations: [
        CreateGroupComponent,
        ViewGroupComponent,
        GroupInfoComponent,
        GroupCoursesComponent,
        GroupScheduleComponent
    ],
    providers: [
        GroupService
      ],
    exports: [
        CreateGroupComponent,
        ViewGroupComponent,
        GroupInfoComponent,
        GroupCoursesComponent,
        GroupScheduleComponent
    ]
})
export class GroupsModule { }
