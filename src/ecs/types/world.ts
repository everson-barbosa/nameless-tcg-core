import { Attack } from '../components/attack.component';
import { CardBase } from '../components/card-base.component';
import { CardTags } from '../components/card-tag.component';
import { Health } from '../components/health.component';
import { Moviment } from '../components/moviment.component';
import { Turn } from '../components/turn.component';
import { Zone } from '../components/zone.component';

export type Entity = number;

export interface WorldComponents {
  cardBase: Map<Entity, CardBase>;
  cardTags: Map<Entity, CardTags>;
  health: Map<Entity, Health>;
  attack: Map<Entity, Attack>;
  moviment: Map<Entity, Moviment>;
  zone: Map<Entity, Zone>;
  turn: Map<Entity, Turn>;
}

export interface WorldProps {
  nextId: number;
  components: WorldComponents;
}
