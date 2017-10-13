import { Player } from './../../model/player';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';

@Injectable()
export class PlayerProviderFake {

  constructor() {}

  getAllPlayers():Observable<Player[]> {
    return Observable.create(observer => {
        setTimeout(() => {
            let players = [];
            players.push(this.createPlayer(1, 'Marek Borovský', 23, null));
            players.push(this.createPlayer(2, 'Marek Niessner', 24, null));
            players.push(this.createPlayer(3, 'Miroslav Sommer', 68, null));
            observer.next(players);
            observer.complete();
        }, 200);
      });
  }

  getPlayer(id:number):Observable<Player> {
    return Observable.create(observer => {
        setTimeout(() => {
          observer.next(this.createPlayer(1, 'Marek Borovský', 23, null));
          observer.complete();
        }, 200);
      });
  }

  private createPlayer(id:number, name:string, number:number, photo?:any):Player {
      let player = new Player(name, number, photo || null);
      player.id = id;
      return player;
  }

}
