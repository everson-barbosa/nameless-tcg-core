import { Injectable } from '@nestjs/common';
import { World } from '../world';

interface SpawnHandZoneProps {
  readonly world: World;
}

@Injectable()
export class SpawnHandZone {
  execute({ world }: SpawnHandZoneProps) {
    const zoneEntity = world.createEntity();

    world.components.zone.set(zoneEntity, {
      type: 'HAND',
      cards: [],
    });

    return zoneEntity;
  }
}
