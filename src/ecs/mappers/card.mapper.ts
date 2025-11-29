import { Attack } from 'src/ecs/components/attack.component';
import { CardBase } from 'src/ecs/components/card-base.component';
import { CardTags } from 'src/ecs/components/card-tag.component';
import { Health } from 'src/ecs/components/health.component';
import { Moviment } from 'src/ecs/components/moviment.component';
import { CardInput } from 'src/ecs/inputs/card';

interface CardEcs {
  cardBase: CardBase;
  health?: Health;
  cardTags?: CardTags;
  attack?: Attack;
  moviment?: Moviment;
}

export class CardMapper {
  static toEcsEntity(cardInput: CardInput): CardEcs {
    const cardEcs: CardEcs = {
      cardBase: cardInput.cardBase,
    };

    if (cardInput?.health) {
      cardEcs.health = {
        max: cardInput.health.value,
        current: cardInput.health.value,
      };
    }

    if (cardInput?.cardTags) {
      cardEcs.cardTags = cardInput.cardTags;
    }

    if (cardInput?.attack) {
      cardEcs.attack = cardInput.attack;
    }

    if (cardInput?.moviment) {
      cardEcs.moviment = {
        ...cardInput.moviment,
        directions: new Set(cardInput.moviment.directions),
      };
    }

    return cardEcs;
  }
}
