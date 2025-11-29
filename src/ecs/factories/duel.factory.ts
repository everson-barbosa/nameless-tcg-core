import { Injectable } from '@nestjs/common';
import { World } from '../world';
import { CreateCard } from '../system/create-card.system';
import { SpawnDeckZone } from '../system/spawn-deck-zone.system';
import { SpawnHandZone } from '../system/spawn-hand-zone.system';
import { SpawnGraveZone } from '../system/spawn-grave-zone.system';
import { CardMapper } from '../mappers/card.mapper';
import { CardInput } from '../inputs/card';

@Injectable()
export class PlayerFactory {
  constructor(
    private createCard: CreateCard,
    private spawnDeckZone: SpawnDeckZone,
    private spawnHandZone: SpawnHandZone,
    private spawnGraveZone: SpawnGraveZone,
  ) {}

  create(world: World, cardsInput: CardInput[]) {
    const cards = cardsInput.map((card) => {
      const mapped = CardMapper.toEcsEntity(card);
      return this.createCard.execute({ world, ...mapped });
    });

    const deck = this.spawnDeckZone.execute({ world, cards });
    const hand = this.spawnHandZone.execute({ world });
    const grave = this.spawnGraveZone.execute({ world });

    return {
      deck,
      hand,
      grave,
      cards,
    };
  }
}
