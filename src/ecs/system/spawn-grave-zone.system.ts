import { Injectable } from '@nestjs/common';
import { World } from '../world';

interface SpawnGraveZoneProps {
  readonly world: World;
}

@Injectable()
export class SpawnGraveZone {
  execute({ world }: SpawnGraveZoneProps) {
    const deckZoneEntity = world.createEntity();

    world.components.zone.set(deckZoneEntity, {
      type: 'GRAVE',
      cards: [],
    });

    return deckZoneEntity;
  }
}
