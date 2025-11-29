export type Direction = 'N' | 'S' | 'E' | 'W' | 'NE' | 'NW' | 'SE' | 'SW';

export type Directions = Set<Direction>;

export type MobilityType = 'SOLID' | 'GHOST' | 'JUMPER';

export interface Moviment {
  speed: number;
  directions: Directions;
  rotation: number;
  mobility: MobilityType;
}
