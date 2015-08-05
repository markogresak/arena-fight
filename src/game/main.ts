import Boot from './states/boot';
import GameOver from './states/gameover';
import MainMenu from './states/main-menu';
import Play from './states/play';
import Preloader from './states/preloader';

// Import main style sheet.
import 'sass/main.scss';

class Game extends Phaser.Game {

  constructor() {
    super(800, 600, Phaser.AUTO, 'arena-fight')
    this.state.add('boot', Boot);
    this.state.add('gameover', GameOver);
    this.state.add('menu', MainMenu);
    this.state.add('play', Play);
    this.state.add('preload', Preloader);
    this.state.start('boot');
  }

}

window.onload = () => new Game();
