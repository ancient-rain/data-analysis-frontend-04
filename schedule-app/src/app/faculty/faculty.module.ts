import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { FacultyAdviseesComponent } from './index.js';
import { FacultyCourseInfoComponent } from './index.js';
import { FacultyInfoComponent } from './index.js';
import { FacultyScheduleComponent } from './index.js';
import { FacultyTermInfoComponent } from './index.js';
import { FacultyService } from '../services/faculty.service';
import { FilterDataService } from '../services/filter-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        FacultyTermInfoComponent
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
        FacultyTermInfoComponent
    ]
})
export class FacultyModule { }
