export type TroopAttackPattern = 'FRONT' | 'AROUND' | 'FIXED';

export type TroopAttackPatternFrontArea =
  | 'MEELE'
  | 'PIERCE'
  | 'BOW'
  | 'LASER'
  | 'ROW'
  | 'DELTA';

export type TroopAttackPatternAroundArea =
  | 'BACK_AND_FRONT'
  | 'ASIDE'
  | 'CROSS'
  | 'AURA'
  | 'X';

export type TroopAttackPatternFixedArea =
  | 'UNIQUE'
  | 'CROSSED'
  | 'ROW'
  | 'COLUMN';

export type TroopAttackArea =
  | TroopAttackPatternFrontArea
  | TroopAttackPatternAroundArea
  | TroopAttackPatternFixedArea;

export type AttackAffect = 'CONRADE' | 'ENEMY' | 'ALL';

export type AttackEffect = 'DAMAGE' | 'HEAL' | 'PUSH';

export interface Attack {
  title: string;
  cost: number;
  pattern: TroopAttackPattern;
  area: TroopAttackArea;
  affect: AttackAffect;
  effect: AttackEffect;
  value: number;
}
