import { Injectable } from '@nestjs/common';
import { Duel } from './duel';
import { DuelConfig } from './configs/duel.config';
import { DuelAction } from './contexts/duel-context';

interface ActionProps {
  id: string;
  action: DuelAction;
  payload: Record<string, any>;
}

@Injectable()
export class DuelManager {
  private duels = new Map<string, Duel>();

  initDuel(config: DuelConfig): string {
    // const id = crypto.randomUUID();
    const id = '1'; // Mock for tests

    this.duels.set(id, new Duel(config));

    return id;
  }

  getDuel(id: string): Duel | null {
    const duel = this.duels.get(id);

    if (!duel) return null;

    return duel;
  }

  action({ id, action, payload }: ActionProps) {
    const duel = this.duels.get(id);

    if (!duel) return null;

    duel.dispatch(action, payload);
  }
}
