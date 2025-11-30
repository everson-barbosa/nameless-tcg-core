import { StateHandler } from 'src/ecs/contexts/duel-context';
import { getCurrentPlayerId } from 'src/ecs/contexts/get-current-player-id';
import { gotoNextPhase } from 'src/ecs/contexts/go-to-next-phase';
import { drawCard } from 'src/ecs/systems/draw-card.system';

export const drawPhaseStateHandler: StateHandler = {
  onEnter: (ctx) => {
    drawCard({ world: ctx.world, playerId: getCurrentPlayerId(ctx) });

    gotoNextPhase(ctx);
  },
  next: () => 'MAIN_PHASE',
};
