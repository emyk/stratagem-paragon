import { Category, Direction } from './types';

export const stratagemCategories: Category[] = [
  {
    name: 'patrioticAdministrationCenter',
    stratagems: [
      {
        name: 'machineGun',
        combination: [
          Direction.DOWN,
          Direction.LEFT,
          Direction.DOWN,
          Direction.UP,
          Direction.RIGHT,
        ],
      },
      {
        name: 'antiMaterialRifle',
        combination: [
          Direction.DOWN,
          Direction.LEFT,
          Direction.RIGHT,
          Direction.UP,
          Direction.DOWN,
        ],
      },
      {
        name: 'stalwart',
        combination: [
          Direction.DOWN,
          Direction.LEFT,
          Direction.DOWN,
          Direction.UP,
          Direction.UP,
          Direction.LEFT,
        ],
      },
      {
        name: 'expendableAntiTank',
        combination: [
          Direction.DOWN,
          Direction.DOWN,
          Direction.LEFT,
          Direction.UP,
          Direction.RIGHT,
        ],
      },
      {
        name: 'recoillessRifle',
        combination: [
          Direction.DOWN,
          Direction.LEFT,
          Direction.RIGHT,
          Direction.RIGHT,
          Direction.LEFT,
        ],
      },
      {
        name: 'flameThrower',
        combination: [
          Direction.DOWN,
          Direction.LEFT,
          Direction.UP,
          Direction.DOWN,
          Direction.UP,
        ],
      },
      {
        name: 'autocannon',
        combination: [
          Direction.DOWN,
          Direction.RIGHT,
          Direction.LEFT,
          Direction.DOWN,
          Direction.DOWN,
          Direction.UP,
          Direction.UP,
          Direction.RIGHT,
        ],
      },
      {
        name: 'railgun',
        combination: [
          Direction.DOWN,
          Direction.RIGHT,
          Direction.LEFT,
          Direction.DOWN,
          Direction.UP,
          Direction.LEFT,
          Direction.RIGHT,
        ],
      },
      {
        name: 'spear',
        combination: [
          Direction.DOWN,
          Direction.DOWN,
          Direction.UP,
          Direction.DOWN,
          Direction.DOWN,
        ],
      },
    ],
  },
  {
    name: 'orbital',
    stratagems: [
      {
        name: 'orbitalGatlingBarrage',
        combination: [
          Direction.RIGHT,
          Direction.DOWN,
          Direction.LEFT,
          Direction.UP,
          Direction.UP,
        ],
      },
      {
        name: 'orbitalAirburstStrike',
        combination: [Direction.RIGHT, Direction.RIGHT, Direction.RIGHT],
      },
      {
        name: 'orbital120MMHeBarrage',
        combination: [
          Direction.RIGHT,
          Direction.DOWN,
          Direction.LEFT,
          Direction.RIGHT,
          Direction.DOWN,
        ],
      },
      {
        name: 'orbital380MMHeBarrage',
        combination: [
          Direction.RIGHT,
          Direction.DOWN,
          Direction.UP,
          Direction.UP,
          Direction.LEFT,
          Direction.DOWN,
          Direction.DOWN,
        ],
      },
      {
        name: 'orbitalWalkingBarrage',
        combination: [
          Direction.RIGHT,
          Direction.RIGHT,
          Direction.DOWN,
          Direction.LEFT,
          Direction.RIGHT,
          Direction.DOWN,
        ],
      },
      {
        name: 'orbitalRailcannonStrike',
        combination: [
          Direction.RIGHT,
          Direction.UP,
          Direction.DOWN,
          Direction.DOWN,
          Direction.RIGHT,
        ],
      },
    ],
  },
  {
    name: 'hangar',
    stratagems: [
      {
        name: 'eagleAirstrike',
        combination: [
          Direction.UP,
          Direction.RIGHT,
          Direction.DOWN,
          Direction.RIGHT,
        ],
      },
      {
        name: 'eagleClusterStrike',
        combination: [
          Direction.UP,
          Direction.RIGHT,
          Direction.DOWN,
          Direction.DOWN,
          Direction.RIGHT,
        ],
      },
    ],
  },
];
