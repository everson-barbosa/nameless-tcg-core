import { getDeckByPlayerId } from '../queries/get-deck-by-player-id.query';
import { getHandByPlayerId } from '../queries/get-hand-by-player-id.query';
import { World } from '../world';

interface DrawCardProps {
  world: World;
  playerId: string;
}

export function drawCard({ world, playerId }: DrawCardProps) {
  const deck = getDeckByPlayerId({ world, playerId });
  const hand = getHandByPlayerId({ world, playerId });

  if (!deck?.zone || !hand?.zone) return;

  const isDeckEmpty = deck.zone.cards.length === 0;

  if (isDeckEmpty) return;

  const card = deck.zone.cards.shift();

  console.log({ world, card, playerId });

  hand.zone.cards.push(card as number);
}
