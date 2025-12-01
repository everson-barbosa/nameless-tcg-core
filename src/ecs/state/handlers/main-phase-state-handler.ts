import { StateHandler } from 'src/ecs/contexts/duel-context';
import { getCurrentPlayerId } from 'src/ecs/contexts/get-current-player-id';
import { resetTurnActionsToCardsOnBoard } from 'src/ecs/systems/reset-turn-actions-to-cards-on-board.system';

export const mainPhaseStateHandler: StateHandler = {
  onEnter: (ctx) => {
    resetTurnActionsToCardsOnBoard({
      world: ctx.world,
      playerId: getCurrentPlayerId(ctx),
    });
  },
  onAction(ctx, action, payload) {
    console.log({ ctx, action, payload });
  },
};
