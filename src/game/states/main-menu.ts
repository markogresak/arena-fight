export default class MainMenu extends Phaser.State {

  private sprite: Phaser.Sprite;
  private titleText: Phaser.Text;
  private instructionsText: Phaser.Text;

  preload() { }

  create() {
    var style = { font: '65px Arial', fill: '#ffffff', align: 'center' };
    this.sprite = this.game.add.sprite(this.game.world.centerX, 138, 'logo');
    this.sprite.anchor.set(0.5, 0.5);

    this.titleText = this.game.add.text(this.game.world.centerX, 300, 'Test!', style);
    this.titleText.anchor.set(0.5, 0.5);

    this.instructionsText = this.game.add.text(this.game.world.centerX, 400, 'Click anywhere to play "Click The Logo"', { font: '16px Arial', fill: '#ffffff', align: 'center' });
    this.instructionsText.anchor.set(0.5, 0.5);

    this.sprite.angle = -20;
    this.game.add.tween(this.sprite).to({ angle: 20 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
  }

  update() {
    if (this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }

}
