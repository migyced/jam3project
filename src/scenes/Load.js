class Load extends Phaser.Scene{
    constructor(){
        super("loadScene");
    }

    preload(){
        //this.load.image('ET', './assets/ET.png');
        //this.load.spritesheet();
        // this.load.spritesheet('ET', './assets/ET_spritesheet.png', {frameWidth: 16, frameHeight: 22, endFrame: 6, spacing: 1});
        this.load.spritesheet('background', './assets/background_spritesheet.png', { frameWidth: 320, frameHeight: 210, endFrame: 8, margin: 1, spacing: 3 });
        this.load.spritesheet('ET', './assets/ET_sprites.png', { frameWidth: 43, frameHeight: 63, endFrame: 6, spacing: 1 });
        
        this.load.image('map1', './assets/map1.png');
        this.load.image('map2', './assets/map2.png');
        this.load.image('map3', './assets/map3.png');
        this.load.image('map4', './assets/map4.png');
        this.load.image('map5', './assets/map5.png');
        this.load.image('map6', './assets/map6.png');
        
        //this.load.audio();
    }

    create(){

    }

    update(){
        this.scene.start('menuScene');
    }
}