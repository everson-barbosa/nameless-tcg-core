import { Injectable } from '@nestjs/common';
import { World } from '../world';

interface SpawnBoardZoneProps {
  readonly world: World;
}

@Injectable()
export class SpawnBoardZone {
  execute({ world }: SpawnBoardZoneProps) {
    const zoneEntity = world.createEntity();

    world.components.zone.set(zoneEntity, {
      type: 'BOARD',
      cards: [],
    });

    return zoneEntity;
  }
}
