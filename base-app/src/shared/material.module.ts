import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    exports: [
        MatGridListModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class MaterialModule {}