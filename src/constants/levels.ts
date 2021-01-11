import { Level } from '../components/Game/types';

/**
 * Legend:
 *
 *  0x0 - EmptySpace
 *  0x1 - Exit
 *  0x2 - Platform (regular)
 */

export const LEVELS: Level[] = [
  {
    id: 1,
    map: [
      [0,0,0,0,0,0,0,0,0,0],
      [0,2,0,2,2,2,0,2,2,0],
      [0,2,2,2,0,2,2,2,0,0],
      [0,0,2,2,0,0,0,2,0,0],
      [0,0,0,2,2,0,0,2,2,0],
      [0,0,0,0,2,2,0,0,2,0],
      [0,0,0,0,0,2,2,2,1,0],
      [0,0,0,0,0,0,0,0,0,0],
    ],
    ball: [1, 1],
  },
];
