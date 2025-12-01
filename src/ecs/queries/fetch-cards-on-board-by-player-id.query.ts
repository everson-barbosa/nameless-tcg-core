import { Entity, World } from '../world';

interface GetCardsOnBoardByPlayerIdProps {
  world: World;
  playerId: string;
}

export function getCardsOnBoardByPlayerId({
  world,
  playerId,
}: GetCardsOnBoardByPlayerIdProps) {
  const result: Entity[] = [];

  for (const [entity, owner] of world.components.owner) {
    const isPlayerCard = owner.playerId === playerId;

    if (!isPlayerCard) continue;

    if (!world.components.cardBase.has(entity)) continue;

    if (!world.components.coordsOnBoard.has(entity)) continue;

    result.push(entity);
  }

  return result;
}
