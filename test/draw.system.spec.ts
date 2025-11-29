import { DrawSystem } from '../src/systems/draw.system';
import { DeckComponent } from '../src/ecs/components/deck.component';
import { HandComponent } from '../src/ecs/components/hand.component';
import { TroopCard } from '../src/ecs/loops/start-duel';

describe('DrawSystem', () => {
  let drawSystem: DrawSystem;
  let deck: DeckComponent;
  let hand: HandComponent;

  const mockCard: TroopCard = {
    title: 'Test Card',
    health: 1,
    artwork: '',
    tags: [],
    deploymentAreas: [],
    speed: 1,
    rotation: 0,
    mobility: 'SOLID',
    directions: new Set(),
    attack: {
      title: 'Attack',
      cost: 1,
      pattern: 'FRONT',
      area: 'MEELE',
      affect: 'ENEMY',
      healthDelta: 1,
    },
  };

  beforeEach(() => {
    drawSystem = new DrawSystem();
    deck = { cards: Array(30).fill({ ...mockCard }) };
    hand = { cards: [] };
  });

  it('should draw 5 cards', () => {
    drawSystem.draw(deck, hand, 5);
    expect(hand.cards.length).toBe(5);
    expect(deck.cards.length).toBe(25);
  });

  it('should not draw more cards than available', () => {
    deck.cards = [mockCard];
    drawSystem.draw(deck, hand, 5);
    expect(hand.cards.length).toBe(1);
    expect(deck.cards.length).toBe(0);
  });
});
