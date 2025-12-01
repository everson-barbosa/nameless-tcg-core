import { getCardsByPlayerId } from '../queries/fetch-cards-by-player-id.query';
import { getPlayerById } from '../queries/get-player-by-id.query';
import { World } from '../world';

interface SpawnDeckProps {
  world: World;
  playerId: string;
}

export function spawnDeck({ world, playerId }: SpawnDeckProps) {
  const player = getPlayerById({ world, playerId });

  if (!player) return;

  const cards = getCardsByPlayerId({ world, playerId });

  world.components.zone.set(player, {
    type: 'DECK',
    playerId,
    cards,
  });
}
