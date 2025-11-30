import { Injectable, OnModuleInit } from '@nestjs/common';
import { egyptDeck } from 'src/__mocks__/player-one-deck';
import { DuelManager } from 'src/ecs/duel-manager';

@Injectable()
export class InitMockDuel implements OnModuleInit {
  constructor(private duelManager: DuelManager) {}

  onModuleInit() {
    this.duelManager.initDuel({
      players: [
        {
          id: '1',
          boardSide: 'NORTH',
          cards: egyptDeck,
        },
        {
          id: '2',
          boardSide: 'SOUTH',
          cards: egyptDeck,
        },
      ],
    });

    this.duelManager.action('1', 'DEPLOY_CARD_ON_BOARD');
  }
}
