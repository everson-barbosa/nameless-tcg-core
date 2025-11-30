import { DuelState, StateHandler } from '../contexts/duel-context';
import { setupStateHandler } from './handlers/setup-state-handler';
import { drawPhaseStateHandler } from './handlers/draw-phase-state-handler';
import { mainPhaseStateHandler } from './handlers/main-phase-state-handler';

export type StateMachine = Record<DuelState, StateHandler>;

export const stateMachine: StateMachine = {
  SETUP: setupStateHandler,
  DRAW_PHASE: drawPhaseStateHandler,
  MAIN_PHASE: mainPhaseStateHandler,
  END_DUEL: {},
};
