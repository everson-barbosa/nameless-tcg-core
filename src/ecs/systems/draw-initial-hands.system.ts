import { World } from '../world';

const INITIAL_HAND_SIZE = 5;

interface DrawInitialHandsProps {
  readonly world: World;
}

export function drawInitialHands({ world }: DrawInitialHandsProps) {
  for (const [, deckZone] of world.components.zone) {
    const isDeckZone = deckZone.type === 'DECK';

    if (!isDeckZone) continue;

    const handZoneEntity = world.createEntity();

    world.components.zone.set(handZoneEntity, {
      type: 'HAND',
      cards: [],
      playerId: deckZone.playerId,
    });

    const drawnCards = deckZone.cards.splice(0, INITIAL_HAND_SIZE);

    const handZone = world.components.zone.get(handZoneEntity);

    if (handZone) {
      handZone.cards.push(...drawnCards);
    }
  }
}
