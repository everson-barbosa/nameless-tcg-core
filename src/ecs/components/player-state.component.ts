export type BoardSide = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';

export interface PlayerState {
  playerId: string;
  score: number;
  boardSide: BoardSide;
}
