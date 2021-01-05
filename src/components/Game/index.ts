import { PageComponent } from '../../core/components';

class Game extends PageComponent {
  protected constructor() {
    super();

    this.appRoot = document.getElementById('root');
  }

  public render() {
    const el = document.createElement('div');

    el.innerHTML = 'Pyramids of Ra';

    return el;
  }
}

export { Game };
