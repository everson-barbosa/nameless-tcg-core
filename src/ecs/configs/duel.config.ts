import { CardInput } from './card-input';

type BoardSide = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';

interface Player {
  id: string;
  cards: CardInput[];
  boardSide: BoardSide;
}

export interface DuelConfig {
  players: Player[];
}
