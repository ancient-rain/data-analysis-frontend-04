import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentTermInfoComponent } from './student-term-info/student-term-info.component';
import { StudentService } from '../services/student.service';
import { StudentInfoComponent } from './student-term-info/student-info/student-info.component';
import { StudentCourseInfoComponent } from './student-term-info/student-course-info/student-course-info.component';
import { StudentScheduleComponent } from './student-term-info/student-schedule/student-schedule.component';
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
