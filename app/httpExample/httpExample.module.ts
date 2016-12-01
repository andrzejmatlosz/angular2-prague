import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }    from '@angular/http';
import { HttpExampleComponent } from './httpExample.component';
import { PersonObservableService } from './personObservable.service';

@NgModule({
    imports: [ HttpModule, CommonModule ],
    declarations: [ HttpExampleComponent ],
    exports: [ HttpExampleComponent ],
    providers: [ PersonObservableService ]
})
export class HttpExampleModule { }