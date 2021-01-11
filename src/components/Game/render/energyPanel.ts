export function renderEnergyPanel(): void {
  this.energyPanel.innerHTML = `ENERGY - ${this.energyLevel.toString().padStart(3, '0')}`;
}
