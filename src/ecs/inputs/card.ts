export type Direction = 'N' | 'S' | 'E' | 'W' | 'NE' | 'NW' | 'SE' | 'SW';
export type Directions = Direction[];

export type MobilityType = 'SOLID' | 'GHOST' | 'JUMPER';

export type AttackPattern = 'FRONT' | 'AROUND' | 'FIXED';

export type AttackPatternFrontArea =
  | 'MEELE'
  | 'PIERCE'
  | 'BOW'
  | 'LASER'
  | 'ROW'
  | 'DELTA';
export type AttackPatternAroundArea =
  | 'BACK_AND_FRONT'
  | 'ASIDE'
  | 'CROSS'
  | 'AURA'
  | 'X';
export type AttackPatternFixedArea = 'UNIQUE' | 'CROSSED' | 'ROW' | 'COLUMN';

export type AttackArea =
  | AttackPatternFrontArea
  | AttackPatternAroundArea
  | AttackPatternFixedArea;

export type AttackAffect = 'CONRADE' | 'ENEMY' | 'ALL';

export type AttackEffect = 'DAMAGE' | 'HEAL' | 'PUSH';

interface CardBase {
  id: string;
  title: string;
  kind: 'TROOP' | 'TRUMP' | 'TREASURE';
}

interface Moviment {
  speed: number;
  directions: Directions;
  rotation: number;
  mobility: MobilityType;
}

interface Health {
  value: number;
}

interface CardTags {
  tags: string[];
}

interface Attack {
  title: string;
  cost: number;
  pattern: AttackPattern;
  area: AttackArea;
  affect: AttackAffect;
  effect: AttackEffect;
  value: number;
}

export interface CardInput {
  cardBase: CardBase;
  moviment?: Moviment;
  health?: Health;
  cardTags?: CardTags;
  attack?: Attack;
}
