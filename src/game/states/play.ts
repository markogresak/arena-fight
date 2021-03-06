export default class Play extends Phaser.State {

  private sprite: Phaser.Sprite;

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.sprite = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'logo');
    this.sprite.inputEnabled = true;

    this.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.bounce.setTo(1, 1);
    this.sprite.body.velocity.x = this.game.rnd.integerInRange(-500, 500);
    this.sprite.body.velocity.y = this.game.rnd.integerInRange(-500, 500);

    this.sprite.events.onInputDown.add(this.clickListener, this);
  }

  update() { }

  clickListener() {
    this.game.state.start('gameover');
  }

}
