import { DuelConfig } from './configs/duel.config';
import { dispatch } from './state/dispatch';
import { DuelAction, DuelContext } from './contexts/duel-context';
import { StateMachine, stateMachine } from './state/state-machine';
import { initializerContext } from './contexts/initializer-context';
import { gotoNextPhase } from './contexts/go-to-next-phase';

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

    gotoNextPhase(this.context);
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
