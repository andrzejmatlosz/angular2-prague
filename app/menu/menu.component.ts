import { Component, Output, EventEmitter, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from './../shared/sharedData.service';

@Component({
    selector: 'my-menu',
    templateUrl: 'app/menu/menu.component.html',
    styleUrls: [ 'app/menu/menu.component.css' ]
})
export class MenuComponent implements DoCheck {
    showAddToSharedDataBtn: boolean = false;

    constructor(private sharedDataService: SharedDataService,
        private router: Router) {
    }

    ngDoCheck() {
        this.showAddToSharedDataBtn = this.router.url === '/sharedData';
    }

    addValueToSharedData() {
        this.sharedDataService.addData('Value from menu component');
    }
}