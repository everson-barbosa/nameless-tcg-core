import { Entity } from '../types/world';

export type ZoneType = 'HAND' | 'DECK' | 'GRAVE' | 'BOARD';

export interface Zone {
  type: ZoneType;
  cards: Entity[];
}
