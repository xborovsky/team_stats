import { Observable } from 'rxjs/rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Team } from '../../model/team';

@Injectable()
export class TeamProvider {
  private url = 'http://localhost:1337/localhost:8080/team-stats-backend/teams';

  constructor(public http: Http) {}

  getAllTeams():Observable<Team[]> {
    return this.http.get(this.url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
