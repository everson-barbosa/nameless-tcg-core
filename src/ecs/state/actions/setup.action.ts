import {
  DuelContext,
  DuelState,
  StateHandler,
} from 'src/ecs/contexts/duel-context';

export class SetupActions implements StateHandler {
  onEnter(ctx: DuelContext) {
    console.log(1);
  }

  // onAction(ctx: DuelContext) {}

  next(ctx: DuelContext): DuelState {
    return 'DRAW_PHASE';
  }
}
