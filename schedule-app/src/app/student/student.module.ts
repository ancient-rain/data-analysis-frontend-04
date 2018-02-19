import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student.service';
import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import {
  StudentInfoComponent,
  StudentTermInfoComponent,
  StudentTermInformationComponent,
  StudentCourseInfoComponent,
  StudentScheduleComponent,
  ViewStudentsComponent
} from './index';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  declarations: [
    StudentInfoComponent,
    StudentTermInfoComponent,
    StudentTermInformationComponent,
    StudentCourseInfoComponent,
    StudentScheduleComponent,
    ViewStudentsComponent
  ],
  providers: [
    StudentService
  ],
  exports: [
    StudentInfoComponent,
    StudentTermInfoComponent,
    StudentTermInformationComponent,
    StudentCourseInfoComponent,
    StudentScheduleComponent,
    ViewStudentsComponent
  ]
})
export class StudentModule { }
