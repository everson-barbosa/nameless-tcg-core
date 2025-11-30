import { Module } from '@nestjs/common';
import { DuelManager } from './duel-manager';

@Module({
  providers: [DuelManager],
  exports: [DuelManager],
})
export class EcsModule {}
