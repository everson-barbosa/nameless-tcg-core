import { Entity, World } from '../world';

interface GetCardsByPlayerIdProps {
  world: World;
  playerId: string;
}

export function getCardsByPlayerId({
  world,
  playerId,
}: GetCardsByPlayerIdProps) {
  const result: Entity[] = [];

  for (const [entity, owner] of world.components.owner) {
    if (owner.playerId !== playerId) continue;

    if (!world.components.cardBase.has(entity)) continue;

    result.push(entity);
  }

  return result;
}
