import { StateHandler } from 'src/ecs/contexts/duel-context';
import { drawInitialHands } from 'src/ecs/systems/draw-initial-hands.system';
import { shuffleDecks } from 'src/ecs/systems/shuffle-decks.system';

export const setupStateHandler: StateHandler = {
  onEnter: ({ world }) => {
    shuffleDecks({ world });
    drawInitialHands({ world });
  },
  next: () => 'DRAW_PHASE',
};
