import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { CourseInformationComponent } from './course-information.component';
import { CourseService } from '../services/course.service';
import { CourseFacultyInfoComponent } from './course-faculty-info/course-faculty-info.component';
import { CourseStudentInfoComponent } from './course-student-info/course-student-info.component';
import { SingleCourseInfoComponent } from './single-course-info/single-course-info.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule, /* material html won't work without importing in this module */
    FlexLayoutModule,
    AppRoutingModule
  ],
  declarations: [
      CourseInformationComponent,
      CourseFacultyInfoComponent,
      CourseStudentInfoComponent,
      SingleCourseInfoComponent
  ],
  providers: [
    CourseService
  ],
  exports: [
    CourseInformationComponent
  ]
})
export class CourseModule { }