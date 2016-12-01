import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
    selector: 'my-lifecycle-hooks-internal',
    templateUrl: 'app/lifecycleHooksExample/lifecycleHooksInternal.component.html',
    styleUrls: [ 'app/lifecycleHooksExample/lifecycleHooksInternal.component.css' ]
})
export class LifecycleHooksInternalComponent
    implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
    @Input() passParameter: number;
    
    public lifecycleEvents: Array<string> = [];

    constructor() {
        this.lifecycleEvents.push('Constructor');
    }

    ngOnChanges (simpleChanges: SimpleChanges) {
        let s = `OnChanges old: ${simpleChanges['passParameter'].previousValue}, new: ${simpleChanges['passParameter'].currentValue}, value in passParameter variable: ${this.passParameter}`
        this.lifecycleEvents.push(s);
    }

    ngOnInit () {
        this.lifecycleEvents.push('OnInit');
    }

    ngDoCheck () {
        this.lifecycleEvents.push('DoCheck');
    }

    ngAfterContentInit () {
        this.lifecycleEvents.push('AfterContentInit');
    }

    ngAfterContentChecked () {
        this.lifecycleEvents.push('AfterContentChecked');
    }

    ngAfterViewInit () {
        this.lifecycleEvents.push('AfterViewInit');
    }

    ngAfterViewChecked () {
        this.lifecycleEvents.push('AfterViewChecked');
    }

    ngOnDestroy () {
        alert('OnDestroy');
    }
}
