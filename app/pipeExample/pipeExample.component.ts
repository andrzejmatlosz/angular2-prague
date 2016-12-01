import { Component } from '@angular/core';
import { TeamMember, TeamColor } from './teamMember.model';

@Component({
    selector: 'my-pipe-example',
    templateUrl: 'app/pipeExample/pipeExample.component.html',
    styleUrls: [ 'app/pipeExample/pipeExample.component.css' ]
})
export class PipeExampleComponent {
    public sampleDate: Date = new Date();
    public dynamicFormat: string;
    public usedFormat: string;

    useDynamicFormat() {
        this.usedFormat = this.dynamicFormat;
    }


    // public city: string = 'Poznań';
    // public name: string;
    // public teamMembers: Array<TeamMember> = [];
    
    // addTeamMember(color: TeamColor) {
    //     this.teamMembers.push({
    //         name: this.name,
    //         city: this.city,
    //         teamColor: color
    //     });
    // }
}
