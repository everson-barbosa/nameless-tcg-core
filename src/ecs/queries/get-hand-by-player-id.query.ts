import { World } from '../world';

interface GetHandByPlayerIdProps {
  world: World;
  playerId: string;
}

export function getHandByPlayerId({ world, playerId }: GetHandByPlayerIdProps) {
  for (const [entity, zone] of world.components.zone) {
    const isHandZone = zone.type === 'HAND';

    if (!isHandZone) continue;

    if (zone.playerId === playerId) {
      return { entity, zone };
    }
  }

  return null;
}
