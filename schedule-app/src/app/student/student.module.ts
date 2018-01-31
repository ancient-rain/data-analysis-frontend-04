import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentTermInfoComponent } from './index.js';
import { StudentInfoComponent } from './index.js';
import { StudentCourseInfoComponent } from './index.js';
import { StudentScheduleComponent } from './index.js';
import { StudentService } from '../services/student.service';
import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  declarations: [
    StudentTermInfoComponent,
    StudentInfoComponent,
    StudentCourseInfoComponent,
    StudentScheduleComponent
  ],
  providers: [
    StudentService
  ],
  exports: [
    StudentTermInfoComponent,
    StudentInfoComponent,
    StudentCourseInfoComponent,
    StudentScheduleComponent
  ]
})
export class StudentModule { }
