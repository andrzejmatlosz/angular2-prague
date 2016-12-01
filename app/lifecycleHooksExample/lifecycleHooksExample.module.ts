import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { LifecycleHooksExampleComponent } from './lifecycleHooksExample.component';
import { LifecycleHooksInternalComponent } from './lifecycleHooksInternal.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ LifecycleHooksExampleComponent, LifecycleHooksInternalComponent ],
    exports: [ LifecycleHooksExampleComponent ]
})
export class LifecycleHooksExampleModule { }