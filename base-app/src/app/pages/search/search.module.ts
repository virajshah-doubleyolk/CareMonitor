import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/shared/material.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchService } from './service/search.service';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        SearchRoutingModule
    ],
    declarations: [
        SearchComponent
    ],
    providers: [SearchService]
})
export class SearchModule {}