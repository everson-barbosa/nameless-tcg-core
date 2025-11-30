import { DuelAction, DuelContext } from '../contexts/duel-context';
import { stateMachine } from './state-machine';

export function dispatch(ctx: DuelContext, action: DuelAction) {
  const handler = stateMachine[ctx.state];

  handler.onAction?.(ctx, action);

  const next = handler.next?.(ctx);

  if (next) {
    ctx.state = next;
    stateMachine[next].onEnter?.(ctx);
  }
}
