import { Entity } from '../types/world';

export interface Turn {
  currentPlayer: Entity;
  turnNumber: number;
}
