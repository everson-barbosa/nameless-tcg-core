import { World } from '../world';

export type DuelAction = 'DEPLOY_CARD_ON_BOARD';

interface Turn {
  index: number;
  count: number;
  order: string[];
}

export type DuelState = 'SETUP' | 'DRAW_PHASE' | 'MAIN_PHASE' | 'END_DUEL';

export interface DuelContext {
  world: World;
  state: DuelState;
  turn: Turn;
}

export interface StateHandler {
  onEnter?: (ctx: DuelContext) => void;
  onAction?: (ctx: DuelContext, action: DuelAction, payload: any) => void;
  next?: (ctx: DuelContext) => DuelState;
}
