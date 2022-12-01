class NPC extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.following = true;
    
    this.horizontalMargin = 43;
  }

  update(player) {
    if (this.following) {
      this.scene.physics.moveToObject(this, player, 125);
    } else {
      this.body.setVelocity(0, 0);
      // if (this.texture.key == 'FBI') {
      //   this.x -= 1;
      // } else if (this.texture.key == 'scientist') {
      //   this.x += 1;
      // }
      
      // if (this.x < -this.horizontalMargin || this.x > game.config.width - this.horizontalMargin) {
        npcSpawned = false;
        this.destroy();
      // }
    }
  }

  reset() {

  }
}