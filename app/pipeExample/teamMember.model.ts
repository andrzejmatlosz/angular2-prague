export enum TeamColor
{
    Red,
    Green,
    Blue
}

export interface TeamMember {
    name: string;
    city: string;
    teamColor: TeamColor;
}