import { MapItems } from '../../constants/game';

export interface Level {
  id: number;
  map: MapItems[][];
  ball: [number, number];
}
