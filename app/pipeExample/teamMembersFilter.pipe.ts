import { Pipe, PipeTransform } from '@angular/core';
import { TeamMember, TeamColor } from './teamMember.model';

@Pipe({ 
    name: 'teamMembersFilter',
    pure: false
})
export class TeamMembersFilter implements PipeTransform {
    transform(teamMembers: Array<TeamMember>, color: TeamColor, city: string) {
        return teamMembers.filter(teamMember => {
            if (color && city) {
                return teamMember.teamColor === color && teamMember.city === city;
            }

            if (color) {
                return teamMember.teamColor === color;
            }

            if (city) {
                return teamMember.city === city;
            }
        });
    }
}
