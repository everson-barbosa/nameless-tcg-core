import { DuelContext } from './duel-context';

export function getCurrentPlayerId(ctx: DuelContext): string {
  const currentPlayerIndex = (ctx.turn.count - 1) % ctx.turn.order.length;

  return ctx.turn.order[currentPlayerIndex];
}
