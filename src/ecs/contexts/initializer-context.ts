import { DuelConfig } from '../configs/duel.config';
import { DuelContext } from './duel-context';
import { World } from '../world';
import { spawnPlayer } from '../systems/spawn-player.system';
import { spawnCard } from '../systems/spawn-card.system';
import { spawnDeck } from '../systems/spawn-deck.system';
import { shuffleArray } from '../helpers/shuffle-array.helper';

export function initializerContext(config: DuelConfig): DuelContext {
  const world = new World();

  const playersId = config.players.map((player) => player.id);

  for (const player of config.players) {
    spawnPlayer({
      world,
      playerId: player.id,
      boardSide: player.boardSide,
    });

    for (const card of player.cards) {
      spawnCard({ ...card, world, owner: { playerId: player.id } });
    }

    spawnDeck({ world, playerId: player.id });
  }

  return {
    world,
    state: 'SETUP',
    turn: {
      count: 1,
      index: 0,
      order: shuffleArray(playersId),
    },
  };
}
