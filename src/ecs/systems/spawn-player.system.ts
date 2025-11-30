import { BoardSide } from '../components/player-state.component';
import { World } from '../world';

interface SpawnPlayerProps {
  world: World;
  playerId: string;
  boardSide: BoardSide;
}

export function spawnPlayer({ world, playerId, boardSide }: SpawnPlayerProps) {
  const player = world.createEntity();

  world.components.playerState.set(player, { boardSide, playerId, score: 0 });
}
