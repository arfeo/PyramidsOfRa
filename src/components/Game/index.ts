import { PageComponent } from '../../core/components';

import { GAME_CELL_SIZE_VMIN, MAP_HEIGHT, MAP_WIDTH } from '../../constants/game';

import { getCellSize } from '../../core/utils/game';
import { renderPanel } from './render';

class Game extends PageComponent {
  private cellSize: number;
  private panel: HTMLElement;
  private mapCanvas: HTMLCanvasElement;
  private ballCanvas: HTMLCanvasElement;
  private energyLevel: number;

  constructor(levelId = 1, energyLevel = 0) {
    super(levelId, energyLevel);
  }

  public init(levelId: number, energyLevel: number): void {
    this.cellSize = getCellSize(GAME_CELL_SIZE_VMIN);

    this.appRoot = document.getElementById('root');

    this.panel = document.createElement('div');
    this.mapCanvas = document.createElement('canvas');
    this.ballCanvas = document.createElement('canvas');

    this.energyLevel = energyLevel;
  }

  public render(): HTMLElement {
    const gameBoard: HTMLElement = document.createElement('div');
    const canvasContainer: HTMLElement = document.createElement('div');

    gameBoard.className = 'gameBoard';
    this.panel.className = '-panel';
    canvasContainer.className = '-canvas-container';
    this.mapCanvas.className = '-map-canvas';
    this.ballCanvas.className = '-ball-canvas';

    this.mapCanvas.width = MAP_WIDTH * this.cellSize;
    this.mapCanvas.height = MAP_HEIGHT * this.cellSize;
    this.ballCanvas.width = MAP_WIDTH * this.cellSize;
    this.ballCanvas.height = MAP_HEIGHT * this.cellSize;

    gameBoard.appendChild(this.panel);
    gameBoard.appendChild(canvasContainer);
    canvasContainer.appendChild(this.mapCanvas);
    canvasContainer.appendChild(this.ballCanvas);

    return gameBoard;
  }

  public afterMount(): void {
    renderPanel.call(this);
  }
}

export { Game };
