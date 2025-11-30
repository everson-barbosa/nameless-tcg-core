import { DuelConfig } from './configs/duel.config';
import { dispatch } from './state/dispatch';
import { DuelAction, DuelContext } from './contexts/duel-context';
import { StateMachine, stateMachine } from './state/state-machine';
import { initializerContext } from './contexts/initializer-context';

export class Duel {
  private state: StateMachine;
  private context: DuelContext;

  constructor(config: DuelConfig) {
    this.state = stateMachine;
    this.context = initializerContext(config);

    this.init();
  }

  private init() {
    this.state[this.context.state].onEnter?.(this.context);

    this.advance();
  }

  private advance() {
    const current = this.state[this.context.state];
    const next = current.next?.(this.context);

    console.log({ current, next });

    if (next) {
      this.context.state = next;

      this.state[next].onEnter?.(this.context);
    }
  }

  dispatch(action: DuelAction) {
    dispatch(this.context, action);
  }

  getState() {
    return this.state;
  }

  getContext() {
    return this.context;
  }
}
