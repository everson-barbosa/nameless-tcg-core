import { World } from '../world';

interface GetDeckByPlayerIdProps {
  world: World;
  playerId: string;
}

export function getDeckByPlayerId({ world, playerId }: GetDeckByPlayerIdProps) {
  for (const [entity, zone] of world.components.zone) {
    const isDeckZone = zone.type === 'DECK';

    if (!isDeckZone) continue;

    if (zone.playerId === playerId) {
      return { entity, zone };
    }
  }
  return null;
}
