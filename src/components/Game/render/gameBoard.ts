import { MAP_HEIGHT, MAP_WIDTH } from '../../../constants/game';

import { renderEnergyPanel } from './energyPanel';

export function renderGameBoard(): HTMLElement {
  const gameBoard: HTMLElement = document.createElement('div');
  const canvasContainer: HTMLElement = document.createElement('div');

  gameBoard.className = 'gameBoard';
  this.energyPanel.className = '-energy-panel';
  canvasContainer.className = '-canvas-container';
  this.mapCanvas.className = '-map-canvas';
  this.ballCanvas.className = '-ball-canvas';

  this.mapCanvas.width = MAP_WIDTH * this.cellSize;
  this.mapCanvas.height = MAP_HEIGHT * this.cellSize;
  this.ballCanvas.width = MAP_WIDTH * this.cellSize;
  this.ballCanvas.height = MAP_HEIGHT * this.cellSize;

  gameBoard.appendChild(this.energyPanel);
  gameBoard.appendChild(canvasContainer);
  canvasContainer.appendChild(this.mapCanvas);
  canvasContainer.appendChild(this.ballCanvas);

  renderEnergyPanel.call(this);

  return gameBoard;
}
