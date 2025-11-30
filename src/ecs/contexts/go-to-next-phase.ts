import { stateMachine } from '../state/state-machine';
import { DuelContext } from './duel-context';

export function gotoNextPhase(ctx: DuelContext) {
  const handler = stateMachine[ctx.state];
  const next = handler.next?.(ctx);

  if (!next) return;

  ctx.state = next;

  stateMachine[next].onEnter?.(ctx);
}
