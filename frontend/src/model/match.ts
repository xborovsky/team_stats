import { Team } from './team';

export class Match {
    id?:number;
    constructor(public homeTeam:Team, awayTeam:Team, date:Date) {}
}