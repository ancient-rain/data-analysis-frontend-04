import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentTermInfoComponent } from './student/student-term-info/student-term-info.component';

const routes: Routes = [
    { path: 'student/:username/:term', pathMatch: 'full', component: StudentTermInfoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
