import { Injectable } from '@nestjs/common';
import { World } from '../world';
import { Entity } from '../types/world';

interface ShuffleDeckProps {
  readonly world: World;
  readonly deckZoneEntity: Entity;
}

@Injectable()
export class ShuffleDeck {
  execute({ world, deckZoneEntity }: ShuffleDeckProps) {
    const deckZone = world.components.zone.get(deckZoneEntity);

    if (!deckZone) return;

    for (let i = deckZone.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deckZone.cards[i], deckZone.cards[j]] = [
        deckZone.cards[j],
        deckZone.cards[i],
      ];
    }
  }
}
