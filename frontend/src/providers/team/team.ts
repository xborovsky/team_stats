import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Team } from './../../model/team';

/*
  Generated class for the TeamProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeamProvider {

  constructor(public http: Http) {}

  getTeams():Team[] {
    let domynos = new Team('Domynos');
    let arr = [];
    arr.push(domynos);

    return arr;
  }

}
