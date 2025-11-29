import { Injectable } from '@nestjs/common';
import { World } from '../world';
import { Entity } from '../types/world';

interface SpawnDeckZoneProps {
  readonly world: World;
  readonly cards: Entity[];
}

@Injectable()
export class SpawnDeckZone {
  execute({ world, cards }: SpawnDeckZoneProps) {
    const deckZoneEntity = world.createEntity();

    world.components.zone.set(deckZoneEntity, {
      type: 'DECK',
      cards,
    });

    return deckZoneEntity;
  }
}
