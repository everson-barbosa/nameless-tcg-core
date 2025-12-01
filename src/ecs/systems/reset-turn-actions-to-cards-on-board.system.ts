import { getCardsOnBoardByPlayerId } from '../queries/fetch-cards-on-board-by-player-id.query';
import { World } from '../world';

interface ResetTurnActionsToCardsOnBoardProps {
  world: World;
  playerId: string;
}

export function resetTurnActionsToCardsOnBoard({
  world,
  playerId,
}: ResetTurnActionsToCardsOnBoardProps) {
  const cardsOnBoard = getCardsOnBoardByPlayerId({ world, playerId });

  for (const card of cardsOnBoard) {
    const moviment = world.components.moviment.get(card);

    if (!moviment) continue;

    world.components.boardTurnAction.set(card, {
      attack: 1,
      move: moviment.speed ?? 0,
      rotate: moviment.rotation ?? 0,
    });
  }
}
