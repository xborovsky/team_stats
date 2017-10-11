import { Player } from './../../model/player';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/rx';

/*
  Generated class for the PlayerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlayerProvider {
  private url = 'http://localhost:1337/localhost:8080/team-stats-backend/players';

  constructor(public http: Http) {}

  getAllPlayers():Observable<Player[]> {
    return this.http.get(this.url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPlayer(id:number):Observable<Player> {
    return this.http.get(`${this.url}/${id}`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
