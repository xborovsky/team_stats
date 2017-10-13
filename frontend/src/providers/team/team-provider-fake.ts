import { Observable } from 'rxjs/rx';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Team } from '../../model/team';

@Injectable()
export class TeamProviderFake {
  constructor() {}

  getAllTeams():Observable<Team[]> {
    return Observable.create(observer => {
        setTimeout(() => {
            let teams = [];
            teams.push(this.createTeam(1, 'HC Domynos Praha', 'assets/test/domynos.png'));
            teams.push(this.createTeam(1, 'HC Srsni', 'assets/test/srsni.jpg'));
          observer.next(teams);
          observer.complete();
        }, 200);
      });
  }

  private createTeam(id:number, name:string, logo?:any):Team {
    let team = new Team(name);
    team.id = id;
    team.logo = logo || null;

    return team;
  }

}
