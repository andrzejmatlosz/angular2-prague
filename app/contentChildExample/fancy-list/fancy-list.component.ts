import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';

@Component({
    selector: 'my-fancy-list',
    templateUrl: 'app/contentChildExample/fancy-list/fancy-list.component.html'
})
export class FancyListComponent {
    @ContentChild(TemplateRef) template: TemplateRef<any>;
    @Input() items: Array<any> = [];
}
