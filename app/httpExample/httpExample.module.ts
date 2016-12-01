import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }    from '@angular/http';
import { HttpExampleComponent } from './httpExample.component';

@NgModule({
    imports: [ HttpModule, CommonModule ],
    declarations: [ HttpExampleComponent ],
    exports: [ HttpExampleComponent ]
})
export class HttpExampleModule { }