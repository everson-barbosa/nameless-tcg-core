import { Entity } from '../world';

export interface Turn {
  currentPlayer: Entity;
  turnNumber: number;
}
