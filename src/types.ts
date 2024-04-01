export interface Category {
  name: string;
  stratagems: Stratagem[];
}

export interface KeyMapping {
  direction: Direction;
  keys: string[];
}

export enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export interface Stratagem {
  name: string;
  combination: Direction[];
}
