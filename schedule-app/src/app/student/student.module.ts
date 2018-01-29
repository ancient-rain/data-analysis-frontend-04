import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentTermInfoComponent } from './student-term-info/student-term-info.component';
import { StudentService } from '../services/student.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StudentTermInfoComponent
  ],
  providers: [
    StudentService
  ],
  exports: [
    StudentTermInfoComponent
  ]
})
export class StudentModule { }
