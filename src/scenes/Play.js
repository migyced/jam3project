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
        this.anims.create({
            key: 'power',
            frames: this.anims.generateFrameNumbers('ET', {frames: [3, 4, 5, 6]}),
            frameRate: 8,
            repeat: -1
         });
         this.anims.create({
            key: 'unpower',
            frames: this.anims.generateFrameNumbers('ET', {frames: [6, 5, 4, 3]}),
            frameRate: 8,
            repeat: -1
         });
        this.anims.create({
           key: 'walkFBI',
           frames: this.anims.generateFrameNumbers('FBI', {frames: [0, 1, 2, 3]}),
           frameRate: 8,
           repeat: -1        
        });
        
        this.anims.create({
           key: 'walkScientist',
           frames: this.anims.generateFrameNumbers('scientist', {frames: [0, 1, 2, 3]}),
           frameRate: 8,
           repeat: -1        
        });

        const keys = ['walk', 'power', 'unpower', 'walkFBI', 'walkScientist'];
        
        piecesNum = 0;
        maxEnergy = 999;
        energy = maxEnergy;
        
        // bg = this.add.sprite(game.config.width/2, game.config.height/2,'background', 1);
        // bg.setScale(2);
        
        //background image
        
       
        bg = this.add.sprite(game.config.width / 2, game.config.height / 2, 'map' + game.global.bg_map);
        uiBars = this.add.sprite(game.config.width/2, game.config.height/2, 'ui_bars');

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
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE,);
        keySPACE.emitOnRepeat = true;
        
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
        
        // clock to randomly spawn the NPCs
        this.second = 1000;
        this.timer = 0;
        this.lastSpawnTime = 0;
        npcSpawned = false;
        this.clock = this.time.addEvent({delay: this.second, callback: this.spawnNPC, callbackScope: this, loop: true});
    }

    update() {
        
        if(this.gameOver){
            this.scene.start('menuScene');
        } else {
            this.mainSprite.update(bg, this.npc);
            if (this.npc && npcSpawned) {
                this.npc.update(this.mainSprite);
            }
        }
        
        //console.log(energy);
    }
    
    collideHole() {
        console.log("hole");        
        game.global.fall = true;
        game.global.surface;
    }
    
    overlapPieces(sprite, piece) {
        if (piece.alpha == 1) {
            piecesGroup.killAndHide(piece);
            piece.body.enable = false;
        
            energy = Phaser.Math.MaxAdd(energy, 100, maxEnergy);
            piecesNum++;
        }
        
    }
    
    spawnNPC() {
        //increase timer
        this.timer += 1;
        
        if (((this.timer - this.lastSpawnTime) / 100) > Math.random() && !npcSpawned) {
            let random = Math.floor(Math.random() * 2) + 1;
            if (random % 2) {
                this.npc = new NPC(this, 0, 0, 'FBI', 0).setOrigin(0, 0);
                this.npc.play('walkFBI');
            } else {
                this.npc = new NPC(this, 0, 0, 'scientist', 0).setOrigin(0, 0);
                this.npc.play('walkScientist');
            }
            
            this.npc.setScale(2);
            
            this.physics.add.overlap(this.mainSprite, this.npc, () => {this.captured(this.npc)});
            
            npcSpawned = true;
        }
        
    }
    
    captured(npc) {
        bg_map = 2;
        this.mainSprite.updateMap(bg_map);
        
        npc.following = false;
        
        // console.log(npc.texture.key);
        if (npc.texture.key == 'FBI') {
            npc.body.x = 135;
            npc.body.y = 110;
            
            this.mainSprite.body.x = 180;
            this.mainSprite.body.y = 80;
        } else if (npc.texture.key == 'scientist') {
            npc.body.x = 520;
            npc.body.y = 110;
            
            this.mainSprite.body.x = 430;
            this.mainSprite.body.y = 80;
        }
        
        // put with NPC capturing ET
        this.lastSpawnTime = this.timer;
    }
}