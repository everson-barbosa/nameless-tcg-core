import { Injectable } from '@nestjs/common';
import { World } from '../world';
import { Entity } from '../types/world';

interface DrawCardProps {
  readonly world: World;
  readonly deckZoneEntity: Entity;
  readonly handZoneEntity: Entity;
}

@Injectable()
export class DrawCard {
  execute({ world, deckZoneEntity, handZoneEntity }: DrawCardProps) {
    const deckZone = world.components.zone.get(deckZoneEntity);
    const handZone = world.components.zone.get(handZoneEntity);

    if (!deckZone || !handZone) return;

    const card = deckZone.cards.shift();

    if (!card) return;

    handZone.cards.push(card);

    return card;
  }
}
