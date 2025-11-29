import { Module } from '@nestjs/common';
import { StartDuel } from './loops/start-duel';
import { ShuffleDeck } from './system/shuffle-deck.system';
import { CreateCard } from './system/create-card.system';
import { SpawnDeckZone } from './system/spawn-deck-zone.system';
import { SpawnHandZone } from './system/spawn-hand-zone.system';
import { DrawCard } from './system/draw-card.system';
import { SpawnGraveZone } from './system/spawn-grave-zone.system';
import { SpawnBoardZone } from './system/spawn-board-zone.system';
import { World } from './world';
import { PlayerFactory } from './factories/duel.factory';
import { SpawnTurnZone } from './system/spawn-turn.system';

@Module({
  providers: [
    PlayerFactory,
    DrawCard,
    CreateCard,
    ShuffleDeck,
    SpawnBoardZone,
    SpawnDeckZone,
    SpawnHandZone,
    SpawnGraveZone,
    SpawnTurnZone,
    StartDuel,
    World,
  ],
  exports: [StartDuel],
})
export class EcsModule {}
