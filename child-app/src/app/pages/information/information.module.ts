import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/shared/material.module';
import { InformationRoutingModule } from './information-routing.module';
import { InformationComponent } from './information.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        InformationRoutingModule,

    ],
    declarations: [
        InformationComponent
    ],

})
export class InformationModule { }