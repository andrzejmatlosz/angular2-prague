import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DirectiveExampleComponent } from './directiveExample.component';
import { ZoomTextDirective } from './zoom-text/zoom-text.directive';
import { AnyDirective } from './any/any.directive';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ DirectiveExampleComponent, ZoomTextDirective, AnyDirective ],
    exports: [ DirectiveExampleComponent ]
})
export class DirectiveExampleModule { }