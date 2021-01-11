function renderPanel(): void {
  this.panel.innerHTML = `ENERGY - ${this.energyLevel.toString().padStart(3, '0')}`;
}

export { renderPanel };
