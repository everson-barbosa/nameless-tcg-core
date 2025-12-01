import { DuelAction, DuelContext } from '../contexts/duel-context';
import { stateMachine } from './state-machine';

interface Dispatch {
  ctx: DuelContext;
  action: DuelAction;
  payload: any;
}

export function dispatch({ ctx, action, payload }: Dispatch) {
  const handler = stateMachine[ctx.state];

  handler.onAction?.(ctx, action, payload);

  const next = handler.next?.(ctx);

  if (next) {
    ctx.state = next;
    stateMachine[next].onEnter?.(ctx);
  }
}
