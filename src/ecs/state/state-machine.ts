import { DuelState, StateHandler } from '../contexts/duel-context';
import { getCurrentPlayerId } from '../contexts/get-current-player-id';
import { drawCard } from '../systems/draw-card.system';
import { drawInitialHands } from '../systems/draw-initial-hands.system';
import { shuffleDecks } from '../systems/shuffle-decks.system';

export type StateMachine = Record<DuelState, StateHandler>;

export const stateMachine: StateMachine = {
  SETUP: {
    onEnter: ({ world }) => {
      shuffleDecks({ world });
      drawInitialHands({ world });
    },
    next: () => 'DRAW_PHASE',
  },
  DRAW_PHASE: {
    onEnter: (ctx) => {
      drawCard({ world: ctx.world, playerId: getCurrentPlayerId(ctx) });
    },
    onAction: (ctx) => {},
    next: () => 'MAIN_PHASE',
  },

  MAIN_PHASE: {},

  RESOLVING_STACK: {},

  END_DUEL: {},
};
