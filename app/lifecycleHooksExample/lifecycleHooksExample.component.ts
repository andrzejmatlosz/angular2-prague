import { Component } from '@angular/core';

@Component({
    selector: 'my-lifecycle-hooks-example',
    templateUrl: 'app/lifecycleHooksExample/lifecycleHooksExample.component.html',
    styleUrls: [ 'app/lifecycleHooksExample/lifecycleHooksExample.component.css' ]
})
export class LifecycleHooksExampleComponent {
    public numberValue: number = 0;
    public showInternalComponent: boolean = false;
}
