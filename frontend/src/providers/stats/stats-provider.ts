import { Observable } from 'rxjs/rx';
import { Statistic } from './../../model/statistic';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StatsProvider {
  private url = 'http://localhost:1337/localhost:8080/team-stats-backend/stats';

  constructor(public http: Http) {}

  getPlayerStats(playerId:number):Observable<Statistic> {
    return this.http.get(`${this.url}/${playerId}`)
      .map((res:Response) => { console.log(res.json()); return res.json();})
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
