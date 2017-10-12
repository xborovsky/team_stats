import { Team } from './team';

export class Match {
    id?:number;
    constructor(public homeTeam:Team, public awayTeam:Team, public date:Date) {}
}