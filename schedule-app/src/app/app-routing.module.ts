import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { StudentTermInfoComponent } from './student/student-term-info/student-term-info.component';
import { CourseInformationComponent } from './course-information/course-information.component';
import { SingleCourseInfoComponent } from './course-information/single-course-info/single-course-info.component';
import { FacultyTermInfoComponent } from './faculty/index';
import { BadRequestComponent } from './bad-request/bad-request.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: 'signin',
        pathMatch: 'full',
        component: SignInComponent
    },
    {
        path: 'not-found',
        pathMatch: 'full',
        component: BadRequestComponent
    },
    {
        path: 'course/:name/:term',
        pathMatch: 'full',
        component: SingleCourseInfoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'courses/:name/:term',
        pathMatch: 'full',
        component: CourseInformationComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'faculty/:username/:term',
        pathMatch: 'full',
        component: FacultyTermInfoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/:username/:term',
        pathMatch: 'full',
        component: StudentTermInfoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/:username/:term',
        pathMatch: 'full',
        component: StudentTermInfoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'signin'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
