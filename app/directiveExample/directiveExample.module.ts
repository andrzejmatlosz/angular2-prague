import { NgModule } from '@angular/core';
import { DirectiveExampleComponent } from './directiveExample.component';

@NgModule({
    declarations: [ DirectiveExampleComponent],
    exports: [ DirectiveExampleComponent ]
})
export class DirectiveExampleModule { }