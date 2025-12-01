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

  if (!deck || !hand) return;

  const deckZone = world.components.zone.get(deck);
  const handZone = world.components.zone.get(deck);

  if (!deckZone || !handZone) return;

  const isDeckEmpty = deckZone.cards.length === 0;

  if (isDeckEmpty) return;

  const card = deckZone.cards.shift();

  console.log({ world, card, playerId });

  handZone.cards.push(card as number);
}
