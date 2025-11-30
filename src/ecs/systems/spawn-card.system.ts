import { Attack } from 'src/ecs/components/attack.component';
import { CardBase } from 'src/ecs/components/card-base.component';
import { CardTags } from 'src/ecs/components/card-tag.component';
import { Moviment } from 'src/ecs/components/moviment.component';
import { World } from '../world';
import { Owner } from '../components/owner.component';

interface SpawnCardProps {
  readonly world: World;
  readonly owner: Owner;
  readonly cardBase: CardBase;
  readonly health?: number;
  readonly cardTags?: CardTags;
  readonly attack?: Attack;
  readonly moviment?: Moviment;
}

export function spawnCard({
  world,
  owner,
  cardBase,
  health,
  cardTags,
  attack,
  moviment,
}: SpawnCardProps) {
  const card = world.createEntity();

  world.components.cardBase.set(card, cardBase);
  world.components.owner.set(card, owner);

  if (cardTags) world.components.cardTags.set(card, cardTags);

  if (attack) world.components.attack.set(card, attack);

  if (moviment) world.components.moviment.set(card, moviment);

  if (health)
    world.components.health.set(card, {
      current: health,
      max: health,
    });

  return card;
}
