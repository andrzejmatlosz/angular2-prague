import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { PipeExampleComponent } from './pipeExample.component';
import { TeamMembersFilterPipe } from './team-members/team-members-filter.pipe';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ PipeExampleComponent, TeamMembersFilterPipe ],
    exports: [ PipeExampleComponent ]
})
export class PipeExampleModule { }