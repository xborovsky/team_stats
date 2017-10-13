import { Player } from './player';

export class Statistic {
    constructor(
        public player:Player,
        public goals:number,
        public assists:number
    ) {}
}