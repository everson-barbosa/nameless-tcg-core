import { Module } from '@nestjs/common';
import { EcsModule } from 'src/ecs/ecs.module';
import { DuelController } from './duel/duel.controller';
import { InitMockDuel } from './duel/init-mock.duel';

@Module({
  imports: [EcsModule],
  providers: [InitMockDuel],
  controllers: [DuelController],
})
export class InfraModule {}
