import { Player } from './../../model/player';
import { Observable } from 'rxjs/Observable';
import { Statistic } from './../../model/statistic';
import { Injectable } from '@angular/core';

@Injectable()
export class StatsProviderFake {
  
  constructor() {}

  getStats():Observable<Statistic[]> {
    return Observable.create(observer => {
        setTimeout(() => {
            let stats = [];
            stats.push(new Statistic(this.createPlayer(1, 'Marek Borovský', 23), 20, 10));
          observer.next(stats);
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
