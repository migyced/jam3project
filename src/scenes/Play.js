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
        bg = this.add.sprite(game.config.width / 2, game.config.height / 2, 'map' + bg_map);
        
        this.mainSprite = new ET(this, game.config.width/2 - 43, game.config.height / 2 - 63, 'ET').setOrigin(0,0);
        this.mainSprite.play('walk');
        
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        obstaclesGroup = this.add.group({});
        holesGroup = this.add.group({});

        
        this.playerObstacleCollider = this.physics.add.collider(obstaclesGroup, this.mainSprite);
        this.playerHoleCollider = this.physics.add.collider(holesGroup, this.mainSprite, () => { this.collideHole() });
        
        this.gameOver = false;
    }

    update(){
        if(this.gameOver){
            this.scene.start('endScene');
        } else {
            this.mainSprite.update(bg);
        }
    }
    
    collideHole() {
        console.log("hole");
    }
}