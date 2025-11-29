export type CardKind = 'TROOP' | 'TRUMP' | 'TREASURE';

export interface CardBase {
  id: string;
  title: string;
  kind: CardKind;
}
