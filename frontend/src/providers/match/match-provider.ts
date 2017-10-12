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
    /*return this.http.get(`${this.url}`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));*/
      return Observable.create(observer => {
        setTimeout(() => {
          let matches:Match[] = [];
          matches.push(this.testData());
          observer.next(matches);
          observer.complete();
        }, 1000);
      });
  }

  getMatch(id:number):Observable<Match> {
    /*return this.http.get(`${this.url}/${id}`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));*/
      return Observable.create(observer => {
        setTimeout(() => {
          observer.next(this.testData());
          observer.complete();
        }, 1000);
      });
  }

  testData() {
    let homeTeam = new Team('HC Domynos Praha');
    let awayTeam = new Team('HC Rex Bohemia');
    let match = new Match(homeTeam, awayTeam, new Date(1507786860000));
    match.id = 1;

    return match;
  }

}
