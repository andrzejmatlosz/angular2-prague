import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContentChildExampleComponent } from './contentChildExample.component';
import { FancyContainerComponent } from './fancy-container/fancy-container.component';
import { FancyListComponent } from './fancy-list/fancy-list.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    exports: [ ContentChildExampleComponent ],
    declarations: [ ContentChildExampleComponent, FancyContainerComponent, FancyListComponent ]
})
export class ContentChildExampleModule { }