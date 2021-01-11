import { renderBall } from '../render';

const BALL_MAX_SCALE = 1.3;
const BALL_MIN_SCALE = 1;
const BALL_ANIMATION_STEP = 0.1;
const BALL_ANIMATION_DELAY = 90;

function animateBall(): void {
  let start: number = performance.now();
  let scale = BALL_MIN_SCALE;
  let direction = 'up';

  const animate = (time: number): void => {
    if (time - start > BALL_ANIMATION_DELAY) {
      if (scale >= BALL_MAX_SCALE) {
        direction = 'down';
      }

      if (scale <= BALL_MIN_SCALE) {
        direction = 'up';
      }

      scale += direction === 'up' ? BALL_ANIMATION_STEP : -BALL_ANIMATION_STEP;
      start = time;
    }

    renderBall.call(this, scale);

    this.animations.ball = requestAnimationFrame(animate);
  };

  this.animations.ball = requestAnimationFrame(animate);
}

export { animateBall };
