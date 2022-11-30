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
        
        piecesNum = 0;
        maxEnergy = 999;
        energy = maxEnergy;
        
        // bg = this.add.sprite(game.config.width/2, game.config.height/2,'background', 1);
        // bg.setScale(2);
        
        //background image
        bg = this.add.sprite(game.config.width / 2, game.config.height / 2, 'map' + bg_map);
        
        piece1 = this.physics.add.sprite(90, 120, 'reeses');
        piece1.setScale(1.5);
        
        piece2 = this.physics.add.sprite(game.config.width / 2, game.config.height / 2, 'reeses');
        piece2.setScale(1.5);
        
        piece3 = this.physics.add.sprite(game.config.width / 2, 320, 'reeses');
        piece3.setScale(1.5);
        
        piece1.alpha = 0;
        piece2.alpha = 0;
        piece3.alpha = 0;
        
        this.mainSprite = new ET(this, game.config.width/2 - 43, game.config.height / 2 - 63, 'ET').setOrigin(0,0);
        this.mainSprite.play('walk');
        
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        obstaclesGroup = this.add.group({});
        holesGroup = this.add.group({});
        piecesGroup = this.add.group({});
        
        piecesGroup.add(piece1);
        piecesGroup.add(piece2);
        piecesGroup.add(piece3);

        this.playerObstacleCollider = this.physics.add.collider(obstaclesGroup, this.mainSprite);
        this.playerHoleCollider = this.physics.add.collider(holesGroup, this.mainSprite, this.collideHole);
        
        this.physics.add.overlap(this.mainSprite, piecesGroup, this.overlapPieces);
        
        this.gameOver = false;
        
        // this.clock = this.time.addEvent({ delay: 100, callback: () => { this.updateEnergy() }, callbackScope: this, loop: true });
    }

    update(){
        if(this.gameOver){
            this.scene.start('endScene');
        } else {
            this.mainSprite.update(bg);
        }
        
        console.log(energy);
    }
    
    collideHole() {
        console.log("hole");
    }
    
    overlapPieces(sprite, piece) {
        if (piece.alpha == 1) {
            piecesGroup.killAndHide(piece);
            piece.body.enable = false;
            
            //  Add 100 energy, but it'll never go over maxEnergy
            energy = Phaser.Math.MaxAdd(energy, 100, maxEnergy);
            piecesNum++;
        }
        
    }
}