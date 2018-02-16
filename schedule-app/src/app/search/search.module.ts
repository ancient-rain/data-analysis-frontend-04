import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentService } from '../services/student.service';
import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { SearchComponent } from './search.component';
import {
    MemberSearchComponent
} from './index';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        FlexLayoutModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        SearchComponent,
        MemberSearchComponent,
    ],
    exports: [
        SearchComponent,
        MemberSearchComponent,
    ]
})
export class SearchModule { }
