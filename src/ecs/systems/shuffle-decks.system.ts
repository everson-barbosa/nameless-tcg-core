import { shuffleArray } from '../helpers/shuffle-array.helper';
import { World } from '../world';

interface ShuffleDecksProps {
  readonly world: World;
}

export function shuffleDecks({ world }: ShuffleDecksProps) {
  for (const [, zone] of world.components.zone) {
    const isDeckZone = zone.type === 'DECK';

    if (isDeckZone) {
      shuffleArray(zone.cards);
    }
  }
}
