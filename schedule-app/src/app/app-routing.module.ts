import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentTermInfoComponent } from './student/student-term-info/student-term-info.component';
import { FactultyTermInfoComponent } from './faculty/index';

const routes: Routes = [
    { path: 'student/:username/:term', pathMatch: 'full', component: StudentTermInfoComponent },
    { path: 'faculty/:username/:term', pathMatch: 'full', component: FactultyTermInfoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
