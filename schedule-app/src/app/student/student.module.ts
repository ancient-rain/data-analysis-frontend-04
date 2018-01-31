import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentTermInfoComponent } from './index';
import { StudentInfoComponent } from './index';
import { StudentCourseInfoComponent } from './index';
import { StudentScheduleComponent } from './index';
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
