import { PageComponent } from '../../core/components';

class Game extends PageComponent {
  public init(): void {
    this.appRoot = document.getElementById('root');
  }

  public render(): HTMLElement {
    const el: HTMLElement = document.createElement('div');

    el.innerHTML = 'Pyramids of Ra';

    return el;
  }
}

export { Game };
