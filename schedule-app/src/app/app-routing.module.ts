import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentTermInfoComponent } from './student/student-term-info/student-term-info.component';
import { FacultyTermInfoComponent } from './faculty/index';
import { BadRequestComponent } from './bad-request/bad-request.component';

const routes: Routes = [
    { path: 'not-found', pathMatch: 'full', component: BadRequestComponent},
    { path: 'student/:username/:term', pathMatch: 'full', component: StudentTermInfoComponent },
    { path: 'faculty/:username/:term', pathMatch: 'full', component: FacultyTermInfoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
