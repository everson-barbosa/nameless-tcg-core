import { Entity } from '../world';

export type ZoneType = 'HAND' | 'DECK' | 'GRAVE';

export interface Zone {
  type: ZoneType;
  playerId: string;
  cards: Entity[];
}
