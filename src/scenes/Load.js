class Load extends Phaser.Scene{
    constructor(){
        super("loadScene");
    }

    preload(){
        //this.load.image('ET', './assets/ET.png');
        //this.load.spritesheet();
        // this.load.spritesheet('ET', './assets/ET_spritesheet.png', {frameWidth: 16, frameHeight: 22, endFrame: 6, spacing: 1});
        this.load.spritesheet('background', './assets/background_spritesheet.png', { frameWidth: 320, frameHeight: 210, endFrame: 8, margin: 1, spacing: 3 });
        this.load.spritesheet('ET', './assets/ET_sprites.png', {frameWidth: 43, frameHeight: 63, endFrame: 6, spacing: 1});
        //this.load.audio();
    }

    create(){

    }

    update(){
        this.scene.start('menuScene');
    }
}