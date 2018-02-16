import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
// import { CourseInformationComponent } from './course-information.component';
import { CourseService } from '../services/course.service';
import {
//   CourseFacultyInfoComponent,
//   CourseStudentInfoComponent,
//   SingleCourseInfoComponent,
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
    //   CourseInformationComponent,
    //   CourseFacultyInfoComponent,
    //   CourseStudentInfoComponent,
    //   SingleCourseInfoComponent,
      CourseTakenComponent,
      CourseTakenYearComponent,
      CourseNotTakenComponent,
      CourseNotTakenYearComponent
  ],
  providers: [
    CourseService
  ],
  exports: [
    // CourseInformationComponent
  ]
})
export class CourseModule { }
