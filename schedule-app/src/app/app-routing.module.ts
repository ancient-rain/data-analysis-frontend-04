import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentTermInfoComponent } from './student/student-term-info/student-term-info.component';
import { CourseInformationComponent } from './course-information/course-information.component';
import { SingleCourseInfoComponent } from './course-information/single-course-info/single-course-info.component';

const routes: Routes = [
    { path: 'student/:username/:term', pathMatch: 'full', component: StudentTermInfoComponent },
    { path: 'course/:name/:term', pathMatch: 'full', component: SingleCourseInfoComponent},
    { path: 'courses/:name/:term', pathMatch: 'full', component: CourseInformationComponent},


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
