import { Module } from '@nestjs/common';
import { EcsModule } from 'src/ecs/ecs.module';
import { InitDuel } from './init-duel';

@Module({
  imports: [EcsModule],
  providers: [InitDuel],
})
export class InfraModule {}
