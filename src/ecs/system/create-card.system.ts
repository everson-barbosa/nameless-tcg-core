import { Attack } from 'src/ecs/components/attack.component';
import { CardBase } from 'src/ecs/components/card-base.component';
import { CardTags } from 'src/ecs/components/card-tag.component';
import { Health } from 'src/ecs/components/health.component';
import { Moviment } from 'src/ecs/components/moviment.component';
import { Injectable } from '@nestjs/common';
import { World } from '../world';

interface CreateCardProps {
  readonly world: World;
  readonly cardBase: CardBase;
  readonly health?: Health;
  readonly cardTags?: CardTags;
  readonly attack?: Attack;
  readonly moviment?: Moviment;
}

@Injectable()
export class CreateCard {
  execute({
    world,
    cardBase,
    health,
    cardTags,
    attack,
    moviment,
  }: CreateCardProps) {
    const card = world.createEntity();

    world.components.cardBase.set(card, cardBase);

    if (health) world.components.health.set(card, health);
    if (cardTags) world.components.cardTags.set(card, cardTags);
    if (attack) world.components.attack.set(card, attack);
    if (moviment) world.components.moviment.set(card, moviment);

    return card;
  }
}
