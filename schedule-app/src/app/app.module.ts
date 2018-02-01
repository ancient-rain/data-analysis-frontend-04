import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmitterService } from './services/emitter.service';
import { StudentModule } from './student/student.module';
import { AppMaterialModule } from './app-material.module';
import { CourseModule } from './course-information/course.module';
import { FacultyModule } from './faculty/faculty.module';
import { BadRequestModule } from './bad-request/bad-request.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    StudentModule,
    CourseModule,
    FacultyModule,
    BadRequestModule
  ],
  providers: [
    EmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
