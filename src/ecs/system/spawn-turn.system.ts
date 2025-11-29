import { Injectable } from '@nestjs/common';
import { World } from '../world';
import { Entity } from '../types/world';

interface SpawnTurnProps {
  readonly world: World;
  readonly playerEntity: Entity;
}

@Injectable()
export class SpawnTurnZone {
  execute({ world, playerEntity }: SpawnTurnProps) {
    const turnEntity = world.createEntity();

    world.components.turn.set(turnEntity, {
      currentPlayer: playerEntity,
      turnNumber: 1,
    });

    return turnEntity;
  }
}
