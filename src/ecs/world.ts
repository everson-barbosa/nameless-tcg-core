import { Injectable } from '@nestjs/common';
import { WorldComponents, WorldProps } from './types/world';

@Injectable()
export class World {
  private props: WorldProps = {
    nextId: 1,
    components: {
      cardBase: new Map(),
      health: new Map(),
      cardTags: new Map(),
      attack: new Map(),
      moviment: new Map(),
      zone: new Map(),
      turn: new Map(),
    },
  };

  get components(): WorldComponents {
    return this.props.components;
  }

  createEntity() {
    return this.props.nextId++;
  }
}
