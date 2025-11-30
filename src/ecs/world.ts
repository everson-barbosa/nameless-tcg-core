import { randomUUID } from 'crypto';
import { Attack } from './components/attack.component';
import { CardBase } from './components/card-base.component';
import { CardTags } from './components/card-tag.component';
import { Health } from './components/health.component';
import { Moviment } from './components/moviment.component';
import { Turn } from './components/turn.component';
import { Zone } from './components/zone.component';
import { PlayerState } from './components/player-state.component';
import { Owner } from './components/owner.component';
import { BoardTurnAction } from './components/board-turn-action.component';
import { CoordsOnBoard } from './components/coords-on-board.component';

export type Entity = number;

export interface WorldComponents {
  cardBase: Map<Entity, CardBase>;
  cardTags: Map<Entity, CardTags>;
  health: Map<Entity, Health>;
  attack: Map<Entity, Attack>;
  moviment: Map<Entity, Moviment>;
  zone: Map<Entity, Zone>;
  turn: Map<Entity, Turn>;
  owner: Map<Entity, Owner>;
  playerState: Map<Entity, PlayerState>;
  boardTurnAction: Map<Entity, BoardTurnAction>;
  coordsOnBoard: Map<Entity, CoordsOnBoard>;
}

export interface WorldProps {
  id: string;
  nextId: number;
  components: WorldComponents;
}

export class World {
  private props: WorldProps = {
    id: randomUUID(),
    nextId: 1,
    components: {
      cardBase: new Map(),
      health: new Map(),
      cardTags: new Map(),
      attack: new Map(),
      moviment: new Map(),
      zone: new Map(),
      turn: new Map(),
      owner: new Map(),
      playerState: new Map(),
      boardTurnAction: new Map(),
      coordsOnBoard: new Map(),
    },
  };

  get components(): WorldComponents {
    return this.props.components;
  }

  createEntity() {
    return this.props.nextId++;
  }
}
