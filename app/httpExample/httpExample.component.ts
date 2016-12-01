import { Component, OnInit } from '@angular/core';
import { IPerson } from './person.model';
import { PersonObservableService } from './personObservable.service';

@Component({
    selector: 'my-http-example',
    templateUrl: 'app/httpExample/httpExample.component.html'
})
export class HttpExampleComponent implements OnInit {
    public persons: Array<IPerson>;
    public errorMessage: string;

    constructor (
        private personObservableService: PersonObservableService
    ) {

    }

    ngOnInit() { 
        this.getPersons(); 
    }
    
    getPersons() {
        this.personObservableService.getPersons()
            .subscribe(
                persons => this.persons = persons,
                error =>  this.errorMessage = <any>error
            );
  }
}
