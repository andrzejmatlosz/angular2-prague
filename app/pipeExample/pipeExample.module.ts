import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { PipeExampleComponent } from './pipeExample.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ PipeExampleComponent],
    exports: [ PipeExampleComponent ]
})
export class PipeExampleModule { }