import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { egyptDeck } from 'src/__mocks__/player-one-deck';
import type { DuelAction } from 'src/ecs/contexts/duel-context';
import { DuelManager } from 'src/ecs/duel-manager';

@Controller('duel')
export class DuelController {
  constructor(private duelManager: DuelManager) {}

  @Post('create')
  createDuel() {
    const duel = this.duelManager.initDuel({
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

    return { duel };
  }

  @Get('/:duelId')
  findById(@Param('duelId') duelId: string) {
    const duel = this.duelManager.getDuel(duelId);

    if (!duel) throw new NotFoundException();

    return { duel };
  }

  @Post(':duelId/action')
  handleAction(
    @Param('duelId') duelId: string,
    @Body() { action }: { action: DuelAction },
  ) {
    const duel = this.duelManager.getDuel(duelId);

    if (!duel) throw new NotFoundException();

    duel.dispatch(action);

    return duel.getState();
  }
}
