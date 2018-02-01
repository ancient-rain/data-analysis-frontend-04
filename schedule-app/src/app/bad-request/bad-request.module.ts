import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { BadRequestComponent } from './bad-request.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        FlexLayoutModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    declarations: [
        BadRequestComponent
    ],
    exports: [
        BadRequestComponent
    ]
})
export class BadRequestModule { }
