import { MapItems } from '../../../constants/game';

import { drawLineToAngle, drawRectangle } from '../../../core/utils/drawing';

function renderPlatform(x: number,  y: number, type: MapItems): void {
  if (!x || !y || !type) {
    return;
  }

  const ctx: CanvasRenderingContext2D = this.mapCanvas.getContext('2d');

  renderPlatformBase.call(this, x, y);

  switch (type) {
    case MapItems.PlatformRegular:
      drawRectangle(
        ctx,
        x * this.cellSize + this.cellSize / 6,
        y * this.cellSize + this.cellSize / 6,
        this.cellSize - this.cellSize / 3,
        this.cellSize - this.cellSize / 3,
        {
          fillColor: 'rgb(255, 255, 255)',
        },
      );
      break;
    default:
      break;
  }
}

function renderPlatformBase(x: number, y: number): void {
  const ctx: CanvasRenderingContext2D = this.mapCanvas.getContext('2d');

  drawRectangle(
    ctx,
    x * this.cellSize,
    y * this.cellSize,
    this.cellSize,
    this.cellSize,
    {
      fillColor: 'rgb(0, 0, 0)',
    },
  );

  drawLineToAngle(
    ctx,
    x * this.cellSize + this.cellSize / 12,
    y * this.cellSize + this.cellSize / 12,
    this.cellSize - this.cellSize / 3 + this.cellSize / 6,
    0,
    {
      edgingColor: 'rgb(255, 255, 255)',
      edgingWidth: this.cellSize / 24,
    },
  );

  drawLineToAngle(
    ctx,
    x * this.cellSize + this.cellSize / 12,
    y * this.cellSize + this.cellSize / 12,
    this.cellSize - this.cellSize / 3 + this.cellSize / 6,
    90,
    {
      edgingColor: 'rgb(255, 255, 255)',
      edgingWidth: this.cellSize / 24,
    },
  );

  drawLineToAngle(
    ctx,
    x * this.cellSize + this.cellSize / 12,
    y * this.cellSize + this.cellSize - this.cellSize / 12,
    this.cellSize - this.cellSize / 3 + this.cellSize / 6,
    0,
    {
      edgingColor: 'rgb(170, 170, 170)',
      edgingWidth: this.cellSize / 24,
    },
  );

  drawLineToAngle(
    ctx,
    x * this.cellSize + this.cellSize - this.cellSize / 12,
    y * this.cellSize + this.cellSize - this.cellSize / 12,
    this.cellSize - this.cellSize / 3 + this.cellSize / 6,
    -90,
    {
      edgingColor: 'rgb(170, 170, 170)',
      edgingWidth: this.cellSize / 24,
    },
  );
}

export { renderPlatform };
