import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { BadRequestComponent } from './bad-request/bad-request.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CourseComponent } from './courses/courses.component';
// import { SingleCourseInfoComponent } from './course-information/single-course-info/single-course-info.component';
import { SearchComponent } from './search/search.component';
import {
    FacultyTermInfoComponent
} from './faculty/index';
import {
    StudentInfoComponent,
    StudentTermInfoComponent
} from './student/index';
import {
    CreateGroupComponent,
    ViewGroupComponent
} from './groups/index';
import {
    // CourseStudentInfoComponent,
    CourseTakenComponent,
    CourseTakenYearComponent,
    CourseNotTakenComponent,
    CourseNotTakenYearComponent
} from './courses/index';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: SearchComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'signin',
        pathMatch: 'full',
        component: SignInComponent
    }, {
        path: 'create-group',
        pathMatch: 'full',
        component: CreateGroupComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'group/:id',
        pathMatch: 'full',
        component: ViewGroupComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'not-found',
        pathMatch: 'full',
        component: BadRequestComponent
    },
    {
        path: 'course/:name/:term',
        pathMatch: 'full',
        component: CourseComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'faculty/:username/:term',
        pathMatch: 'full',
        component: FacultyTermInfoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student/:username',
        pathMatch: 'full',
        component: StudentInfoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'course/:name/students-taken/all',
        pathMatch: 'full',
        component: CourseTakenComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'course/:name/students-taken/:year',
        pathMatch: 'full',
        component: CourseTakenYearComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'course/:name/students-not-taken/all',
        pathMatch: 'full',
        component: CourseNotTakenComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'course/:name/students-not-taken/:year',
        pathMatch: 'full',
        component: CourseNotTakenYearComponent,
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
