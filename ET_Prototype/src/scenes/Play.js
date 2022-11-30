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
        
        bg = this.add.sprite(game.config.width/2, game.config.height/2,'background', 1);
        bg.setScale(2);

        this.mainSprite = new ET(this, game.config.width/2, game.config.height/2, 'ET').setOrigin(0,0);
        this.mainSprite.play('walk');
        this.mainSprite.setScale(2);
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
        }else{
            this.mainSprite.update(bg);
        }
    }
}