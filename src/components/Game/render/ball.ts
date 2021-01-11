import { drawCircle } from '../../../core/utils/drawing';

function renderBall(scale: number): void {
  const ctx: CanvasRenderingContext2D = this.ballCanvas.getContext('2d');
  const [ballY, ballX] = this.level.ball;

  ctx.clearRect(
    ballX * this.cellSize,
    ballY * this.cellSize,
    this.cellSize,
    this.cellSize,
  );

  drawCircle(
    ctx,
    ballX * this.cellSize + this.cellSize / 2,
    ballY * this.cellSize + this.cellSize / 2,
    this.cellSize / 4 * scale,
    {
      fillColor: 'rgb(0, 0, 0)',
    },
  );
}

export { renderBall };
