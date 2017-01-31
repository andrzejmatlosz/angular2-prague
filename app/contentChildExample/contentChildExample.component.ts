import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-content-child-example',
    templateUrl: 'app/contentChildExample/contentChildExample.component.html',
    styleUrls: [ 'app/contentChildExample/contentChildExample.component.css' ]
})
export class ContentChildExampleComponent {
    public text: string;
    public items: Array<string> = [];

    addText() {
        this.items.push(this.text);
    }
}
