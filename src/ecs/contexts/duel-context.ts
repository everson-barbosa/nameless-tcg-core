import { World } from '../world';

export type DuelAction = 'SUMMON_TROOP_CARD';

interface Turn {
  index: number;
  count: number;
  order: string[];
}

export type DuelState =
  | 'SETUP'
  | 'DRAW_PHASE'
  | 'MAIN_PHASE'
  | 'RESOLVING_STACK'
  | 'END_DUEL';

export interface DuelContext {
  world: World;
  state: DuelState;
  turn: Turn;
}

export interface StateHandler {
  onEnter?: (ctx: DuelContext) => void;
  onAction?: (ctx: DuelContext, action: DuelAction) => void;
  next?: (ctx: DuelContext) => DuelState;
}
