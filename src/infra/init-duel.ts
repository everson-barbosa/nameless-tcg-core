import { Injectable, OnModuleInit } from '@nestjs/common';
import { egyptDeck } from 'src/__mocks__/player-one-deck';
import { StartDuel } from 'src/ecs/loops/start-duel';

@Injectable()
export class InitDuel implements OnModuleInit {
  constructor(private startDuel: StartDuel) {}

  onModuleInit() {
    this.startDuel.execute({
      playerOneCardsInput: egyptDeck,
    });
  }
}
