import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { PipeExampleComponent } from './pipeExample.component';
import { TeamMembersFilter } from './teamMembersFilter.pipe';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ PipeExampleComponent, TeamMembersFilter ],
    exports: [ PipeExampleComponent ]
})
export class PipeExampleModule { }