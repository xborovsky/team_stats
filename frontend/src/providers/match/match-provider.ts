import { Team } from './../../model/team';
import { Observable } from 'rxjs/rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Match } from '../../model/match';

@Injectable()
export class MatchProvider {

  private url = 'http://localhost:1337/localhost:8080/team-stats-backend/matches';

  constructor(public http: Http) {}

  getAllMatches():Observable<Match[]> {
    return this.http.get(`${this.url}`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getMatch(id:number):Observable<Match> {
    return this.http.get(`${this.url}/${id}`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
