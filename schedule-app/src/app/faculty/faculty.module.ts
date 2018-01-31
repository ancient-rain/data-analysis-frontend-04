import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { FactultyAdviseesComponent } from './index.js';
import { FactultyCourseInfoComponent } from './index.js';
import { FactultyInfoComponent } from './index.js';
import { FactultyScheduleComponent } from './index.js';
import { FactultyTermInfoComponent } from './index.js';
import { FacultyService } from '../services/faculty.service';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        FlexLayoutModule,
        AppRoutingModule
    ],
    declarations: [
        FactultyAdviseesComponent,
        FactultyCourseInfoComponent,
        FactultyInfoComponent,
        FactultyScheduleComponent,
        FactultyTermInfoComponent
    ],
    providers: [
        FacultyService
    ],
    exports: [
        FactultyAdviseesComponent,
        FactultyCourseInfoComponent,
        FactultyInfoComponent,
        FactultyScheduleComponent,
        FactultyTermInfoComponent
    ]
})
export class FacultyModule { }
