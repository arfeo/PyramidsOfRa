import { MapItems, MAP_HEIGHT, MAP_WIDTH } from '../../../constants/game';

import { renderPlatform } from './platform';

function renderMap(): void {
  for (let y = 0; y < MAP_HEIGHT; y += 1) {
    for (let x = 0; x < MAP_WIDTH; x += 1) {
      renderMapItem.call(this, x, y);
    }
  }
}

function renderMapItem(x: number, y: number): void {
  if (this.level.map[y] === undefined) {
    return;
  }

  switch (this.level.map[y][x]) {
    case MapItems.EmptySpace:
      break;
    case MapItems.PlatformRegular:
      renderPlatform.call(this, x, y, MapItems.PlatformRegular);
      break;
    case MapItems.Exit:
      break;
    default:
      break;
  }
}

export { renderMap };
