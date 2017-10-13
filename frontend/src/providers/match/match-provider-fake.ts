import { Team } from './../../model/team';
import { Observable } from 'rxjs/rx';
import { Injectable } from '@angular/core';
import { Match } from '../../model/match';

@Injectable()
export class MatchProviderFake {

  constructor() {}

  getAllMatches():Observable<Match[]> {
      return Observable.create(observer => {
        setTimeout(() => {
          let matches:Match[] = [];
          matches.push(this.testData());
          observer.next(matches);
          observer.complete();
        }, 200);
      });
  }

  getMatch(id:number):Observable<Match> {
      return Observable.create(observer => {
        setTimeout(() => {
          observer.next(this.testData());
          observer.complete();
        }, 200);
      });
  }

  testData() {
    let homeTeam = new Team('HC Domynos Praha');
    homeTeam.logo = 'assets/test/domynos.png';
    let awayTeam = new Team('HC Rex Bohemia');
    awayTeam.logo = 'assets/test/srsni.jpg';
    let match = new Match(homeTeam, awayTeam, new Date(1507786860000));
    match.id = 1;

    return match;
  }

}
