import { World } from '../world';

interface GetPlayerByIdProps {
  world: World;
  playerId: string;
}

export function getPlayerById({ world, playerId }: GetPlayerByIdProps) {
  for (const [entity, playerState] of world.components.playerState) {
    if (playerState.playerId === playerId) {
      return entity;
    }
  }

  return null;
}
