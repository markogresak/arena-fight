
export default class Preloader extends Phaser.State {

  private ready: boolean;
  private asset: Phaser.Sprite;
  private width: number;
  private height: number;

  preload() {
    this.asset = this.add.sprite(this.width / 2, this.height / 2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    this.load.image('logo', 'assets/logo.png');
  }

  create() { }

  update() {
    if (this.ready) {
      this.game.state.start('menu');
    }
  }

  onLoadComplete() {
    this.ready = true;
  }

}
