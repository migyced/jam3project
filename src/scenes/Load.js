class Load extends Phaser.Scene{
    constructor(){
        super("loadScene");
    }

    preload(){
        this.load.spritesheet('background', './assets/background_spritesheet.png', { frameWidth: 320, frameHeight: 210, endFrame: 8, margin: 1, spacing: 3 });
        this.load.spritesheet('ET', './assets/ET_sprites.png', { frameWidth: 43, frameHeight: 63, endFrame: 6, spacing: 1 });
        this.load.spritesheet('FBI', './assets/fbi_spritesheet.png', { frameWidth: 17, frameHeight: 28, endFrame: 4, spacing: 1 });
        this.load.spritesheet('scientist', './assets/scientist_spritesheet.png', { frameWidth: 17, frameHeight: 28, endFrame: 5, spacing: 1 });
        
        this.load.image('map1', './assets/map1.png');
        this.load.image('map2', './assets/map2.png');
        this.load.image('map3', './assets/map3.png');
        this.load.image('map4', './assets/map4.png');
        this.load.image('map5', './assets/map5.png');
        this.load.image('map6', './assets/map6.png');
        this.load.image('map7', './assets/holes_scene_dirt.png');
        this.load.image('map8', './assets/holes_scene_water.png');
        
        this.load.image('reeses', './assets/reeses_pieces.png');
        
        //this.load.audio();
    }

    create(){

    }

    update(){
        this.scene.start('menuScene');
    }
}