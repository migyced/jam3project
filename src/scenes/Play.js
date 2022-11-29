class Play extends Phaser.Scene{
    constructor(){
        super('playScene');
    }

    create(){
        this.anims.create({
           key: 'walk',
           frames: this.anims.generateFrameNumbers('ET', {frames: [0, 1, 2, 3]}),
           frameRate: 8,
           repeat: -1            
        });

        const keys = ['walk'];
        
        // bg = this.add.sprite(game.config.width/2, game.config.height/2,'background', 1);
        // bg.setScale(2);
        
        //background image
        bg_maps = ['map1', 'map2', 'map3', 'map4', 'map5', 'map6'];
        bg_map = 1;
        bg = this.add.sprite(game.config.width / 2, game.config.height / 2, 'map' + bg_map);
        
        

        this.mainSprite = new ET(this, 300, 125, 'ET').setOrigin(0,0);
        this.mainSprite.play('walk');
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.gameOver = false;

    }

    update(){
        if(this.gameOver){
            this.scene.start('endScene');
        } else {
            this.mainSprite.update(bg);
        }
    }
}