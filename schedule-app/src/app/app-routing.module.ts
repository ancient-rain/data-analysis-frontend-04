import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { BadRequestComponent } from './bad-request/bad-request.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CourseInformationComponent } from './course-information/course-information.component';
import { SingleCourseInfoComponent } from './course-information/single-course-info/single-course-info.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { SearchComponent } from './search/search.component';
import {
    FacultyTermInfoComponent
} from './faculty/index';
import {
    StudentInfoComponent,
    StudentTermInfoComponent
} from './student/index';
import { CourseStudentInfoComponent } from './course-information/course-student-info/course-student-info.component';

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
        component: CreateGroupComponent
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
