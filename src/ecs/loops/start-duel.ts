import { Injectable } from '@nestjs/common';
import { ShuffleDeck } from 'src/ecs/system/shuffle-deck.system';
import { DrawCard } from 'src/ecs/system/draw-card.system';
import { CardInput } from '../inputs/card';
import { World } from '../world';
import { PlayerFactory } from '../factories/duel.factory';

const INITIAL_HAND_LENGTH = 5;

interface StartDuelProps {
  readonly playerOneCardsInput: CardInput[];
}

@Injectable()
export class StartDuel {
  constructor(
    private world: World,
    private playerFactory: PlayerFactory,
    private drawCard: DrawCard,
    private shuffleDeck: ShuffleDeck,
  ) {}

  execute({ playerOneCardsInput }: StartDuelProps) {
    const playerOne = this.playerFactory.create(
      this.world,
      playerOneCardsInput,
    );

    const playerTwo = this.playerFactory.create(
      this.world,
      playerOneCardsInput,
    );

    this.shuffleDeck.execute({
      world: this.world,
      deckZoneEntity: playerOne.deck,
    });

    this.shuffleDeck.execute({
      world: this.world,
      deckZoneEntity: playerTwo.deck,
    });

    for (let i = 0; i < INITIAL_HAND_LENGTH; i++) {
      this.drawCard.execute({
        world: this.world,
        deckZoneEntity: playerOne.deck,
        handZoneEntity: playerOne.hand,
      });
    }

    for (let i = 0; i < INITIAL_HAND_LENGTH; i++) {
      this.drawCard.execute({
        world: this.world,
        deckZoneEntity: playerTwo.deck,
        handZoneEntity: playerTwo.hand,
      });
    }
  }
}
