import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { CourseService } from '../services/course.service';
import { CourseComponent } from './courses.component';
import {
  CourseFacultyInfoComponent,
  CourseInfoComponent,
  CourseStudentInfoComponent,
  CourseTakenComponent,
  CourseTakenYearComponent,
  CourseNotTakenComponent,
  CourseNotTakenYearComponent
} from './index';


@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  declarations: [
    CourseComponent,
    CourseFacultyInfoComponent,
    CourseInfoComponent,
    CourseStudentInfoComponent,
    CourseTakenComponent,
    CourseTakenYearComponent,
    CourseNotTakenComponent,
    CourseNotTakenYearComponent
  ],
  providers: [
    CourseService
  ]
})
export class CourseModule { }
