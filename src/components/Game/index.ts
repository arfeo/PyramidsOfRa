import { PageComponent } from '../../core/components';

import { GAME_CELL_SIZE_VMIN } from '../../constants/game';

import { getCellSize } from '../../core/utils/game';
import { renderGameBoard } from './render';

class Game extends PageComponent {
  private cellSize: number;
  private energyPanel: HTMLElement;
  private mapCanvas: HTMLCanvasElement;
  private ballCanvas: HTMLCanvasElement;
  private energyLevel: number;

  constructor(levelId = 1, energyLevel = 0) {
    super(levelId, energyLevel);
  }

  public init(levelId: number, energyLevel: number): void {
    this.cellSize = getCellSize(GAME_CELL_SIZE_VMIN);

    this.appRoot = document.getElementById('root');

    this.energyPanel = document.createElement('div');
    this.mapCanvas = document.createElement('canvas');
    this.ballCanvas = document.createElement('canvas');

    this.energyLevel = energyLevel;
  }

  public render(): HTMLElement {
    return renderGameBoard.call(this);
  }
}

export { Game };
