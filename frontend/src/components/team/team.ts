import { Team } from './../../model/team';
import { TeamProvider } from './../../providers/team/team';
import { Component } from '@angular/core';

/**
 * Generated class for the TeamComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'team',
  templateUrl: 'team.html'
})
export class TeamComponent {

  text: string;
  teams:Team[] = [];

  constructor(private teamProvider:TeamProvider) {
    this.text = 'Hello World';
    this.teams = teamProvider.getTeams();
  }

}
