import { Component } from '@angular/core';

@Component({
    selector: 'my-directive-example',
    templateUrl: 'app/directiveExample/directiveExample.component.html',
    styleUrls: [ 'app/directiveExample/directiveExample.component.css' ]
})
export class DirectiveExampleComponent {

    public isZoomEnabled: boolean= false;

    public condition1: boolean= false;
    public condition2: boolean= false;
    public condition3: boolean= false;
    public conidtionsArray: Array<boolean> = [];

    refreshConditionsArray() {
        this.conidtionsArray = [ this.condition1, this.condition2, this.condition3 ];
    }
}
