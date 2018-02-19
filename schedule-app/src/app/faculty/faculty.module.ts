import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { FacultyService } from '../services/faculty.service';
import { FilterDataService } from '../services/filter-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    FacultyAdviseesComponent,
    FacultyCourseInfoComponent,
    FacultyInfoComponent,
    FacultyScheduleComponent,
    FacultyTermInfoComponent,
    FacultyDescriptionComponent
} from './index.js';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        FlexLayoutModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    declarations: [
        FacultyAdviseesComponent,
        FacultyCourseInfoComponent,
        FacultyInfoComponent,
        FacultyScheduleComponent,
        FacultyTermInfoComponent,
        FacultyDescriptionComponent
    ],
    providers: [
        FacultyService,
        FilterDataService
    ],
    exports: [
        FacultyAdviseesComponent,
        FacultyCourseInfoComponent,
        FacultyInfoComponent,
        FacultyScheduleComponent,
        FacultyTermInfoComponent,
        FacultyDescriptionComponent
    ]
})
export class FacultyModule { }
