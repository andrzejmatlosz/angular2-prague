import { Component } from '@angular/core';
import { IPerson } from './person.model';

@Component({
    selector: 'my-http-example',
    templateUrl: 'app/httpExample/httpExample.component.html'
})
export class HttpExampleComponent {
    public persons: Array<IPerson>;
}
