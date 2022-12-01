class ET extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.body.setGravity(0,10);
        //this.sfxET = scene.sound.add('sound-name');
        this.speed = 4;
        this.hudHeight = 2 * 47;
        this.horizontalMargin = 43;
        this.topMargin = 25;
        this.VELOCITY = 400;
        this.topUI = 60;
    }

    update(bg, npc){
        this.setScale(2);
        //movement
        if(keyUP.isDown){
            // this.y -= this.speed;
            this.body.setVelocityY(-this.VELOCITY);
            this.updateEnergy();
        } else if(keyDOWN.isDown){
            // this.y += this.speed;
            this.body.setVelocityY(this.VELOCITY);
            this.updateEnergy();
        } else if(keyLEFT.isDown){
            // this.x -= this.speed;
            this.body.setVelocityX(-this.VELOCITY);
            this.setFlipX(true);
            this.updateEnergy();
        } else if(keyRIGHT.isDown){
            // this.x += this.speed;
            this.body.setVelocityX(this.VELOCITY);
            this.setFlipX(false);
            this.updateEnergy();
        } else if (!keyRIGHT.isDown && !keyLEFT.isDown && !keyDOWN.isDown && !keyUP.isDown) {
            this.body.setVelocityX(0);
            this.body.setVelocityY(0);
        }

        // if(Phaser.Input.Keyboard.JustDown(keySPACE) && game.global.fall) {
        //     this.play('power');
        // }
        // } else if (game.global.fall) {
        //     this.play('unpower');
        // }
        // this.play('walk');

        if(keySPACE.isDown && game.global.fall) {
            //this is where E.T.'s special ability goes
            this.body.setVelocityY(-(this.VELOCITY/3));
            
        }
        console.log(game.global.fall);
        if (game.global.fall) {
            this.updateMap(7);
            if (this.y < this.topMargin) {
                game.global.reposition = true;
                game.global.fall = false;
                this.body.setAllowGravity(false);
                console.log(game.global.bg_map);
                this.updateMap(game.global.bg_map);
                this.play('walk');
            }
        } else {
            if(this.x < -this.horizontalMargin){
                //if ET goes past the left screen border
                //temporary fix:
                if (npc && npcSpawned) {
                    npc.body.x = game.config.width + this.horizontalMargin;
                }
                this.x = game.config.width - this.horizontalMargin - 2*this.width;
                if (game.global.bg_map == 1) {
                    game.global.bg_map = 3;
                    // bg.setTexture('map' + 3);
                } else if (game.global.bg_map == 2) {
                    game.global.bg_map = 3;
                    // bg.setTexture(3);
                } else if (game.global.bg_map == 3) {
                    game.global.bg_map = 4;
                    // bg.setTexture(4);
                } else if (game.global.bg_map == 4) {
                    game.global.bg_map = 5;
                    // bg.setTexture(5);
                } else if (game.global.bg_map == 5) {
                    game.global.bg_map = 2;
                    // bg.setTexture(2);
                } else if (game.global.bg_map == 6) {
                    game.global.bg_map = 5;
                    // bg.setTexture(5);
                }
                this.updateMap(game.global.bg_map);
            }
            if(this.x > game.config.width-this.horizontalMargin){
                //if ET goes past the right screen border
                //temporary fix
                if (npc && npcSpawned) {
                    npc.body.x = - this.horizontalMargin;
                }
                this.x = this.horizontalMargin;
                if (game.global.bg_map == 1) {
                    game.global.bg_map = 5;
                    // bg.setTexture(5);
                } else if (game.global.bg_map == 2) {
                    game.global.bg_map = 5;
                    // bg.setTexture(5);
                } else if (game.global.bg_map == 3) {
                    game.global.bg_map = 2;
                    // bg.setTexture(2);
                } else if (game.global.bg_map == 4) {
                    game.global.bg_map = 3;
                    // bg.setTexture(3);
                } else if (game.global.bg_map == 5) {
                    game.global.bg_map = 4;
                    // bg.setTexture(4);
                } else if (game.global.bg_map == 6) {
                    game.global.bg_map = 3;
                    // bg.setTexture(3);
                }
                this.updateMap(game.global.bg_map);
            }
            if(this.y < this.topMargin){
                //if ET goes past the top screen border
                //temporary fix
                if (npc && npcSpawned) {
                    npc.body.y = game.config.height + this.hudHeight;
                }
                this.y = game.config.height - 2*this.height - this.hudHeight;
                if (game.global.bg_map == 1) {
                    game.global.bg_map = 4;
                    // bg.setTexture(4);
                } else if (game.global.bg_map == 2) {
                    game.global.bg_map = 1;
                    // bg.setTexture(1);
                } else if (game.global.bg_map == 3) {
                    game.global.bg_map = 1;
                    // bg.setTexture(1);
                } else if (game.global.bg_map == 4) {
                    game.global.bg_map = 1;
                    // bg.setTexture(1);
                } else if (game.global.bg_map == 5) {
                    game.global.bg_map = 1;
                    // bg.setTexture(1);
                } else if (game.global.bg_map == 6) {
                    game.global.bg_map = 4;
                    // bg.setTexture(4);
                }
                this.updateMap(game.global.bg_map);
            }
            if(this.y > game.config.height - 2*this.height - this.hudHeight){
                //if ET goes past the bottom screen border
                //temporary fix

                this.y = this.topMargin;
                if (game.global.bg_map == 1) {
                    game.global.bg_map = 2;
                    // bg.setTexture(2);
                } else if (game.global.bg_map == 2) {
                    game.global.bg_map = 6;
                    // bg.setTexture(6);
                } else if (game.global.bg_map == 3) {
                    game.global.bg_map = 6;
                    // bg.setTexture(6);
                } else if (game.global.bg_map == 4) {
                    game.global.bg_map = 6;
                    // bg.setTexture(6);
                } else if (game.global.bg_map == 5) {
                    game.global.bg_map = 6;
                    // bg.setTexture(6);
                } else if (game.global.bg_map == 6) {
                    game.global.bg_map = 2;
                    // bg.setTexture(2);
                }
                this.updateMap(game.global.bg_map);
            }
        }
    }

    reset(){
        this.x = game.config.width/2 - 43;
        this.y = game.config.height/2 - 63;
    }
    
    updateMap(map) {
        console.log("update ", map);
        bg.setTexture('map' + map);
        obstaclesGroup.clear(true);
        holesGroup.clear(true);
        
        piece1.alpha = 0;
        piece2.alpha = 0;
        piece3.alpha = 0;
        
        if (map == 7 || map == 8) {
            obstaclesGroup.clear(true);
            holesGroup.clear(true);

            if (game.global.reposition == true) {
                console.log("repos");
                game.global.reposition = false;
                this.x = 290;
                this.y = 50;
            }
            if (!keySPACE.isDown) {
                this.body.setVelocityY(this.VELOCITY/2);
            }
            this.body.setAllowGravity(true);
            let ground = this.scene.add.rectangle(500,420,1000,42,0x6666ff);
            let leftside = this.scene.add.rectangle(0,0,200,840,0x6666ff);
            let rightside = this.scene.add.rectangle(500,420,30,840,0x6666ff);

            this.scene.physics.add.existing(ground);
            this.scene.physics.add.existing(leftside);
            this.scene.physics.add.existing(rightside);

            ground.body.setImmovable(true);
            leftside.body.setImmovable(true);
            rightside.body.setImmovable(true);

            ground.alpha = 0;
            leftside.alpha = 0;
            rightside.alpha = 0;

            obstaclesGroup.add(ground);
            obstaclesGroup.add(leftside);
            obstaclesGroup.add(rightside);
            sceneName.text = "Well";
            symbols.setFrame(0);
        }
        if (map == 3) {
            // let hole1 = this.scene.add.rectangle(325, 90 + this.topUI, 100, 35, 0x6666ff);
            let hole2 = this.scene.add.rectangle(325, 285 + this.topUI, 100, 45, 0x6666ff);
            
            // this.scene.physics.add.existing(hole1);
            this.scene.physics.add.existing(hole2);
            
            // hole1.body.setImmovable();
            hole2.body.setImmovable();
            
            // hole1.alpha = 0;
            hole2.alpha = 0;
            
            // holesGroup.add(hole1);
            holesGroup.add(hole2);
            
            // let tree1 = this.scene.add.rectangle(130, 300 + this.topUI, 45, 140, 0x6666ff);
            // let tree2 = this.scene.add.rectangle(520, 300 + this.topUI, 45, 140, 0x6666ff);
            
            // this.scene.physics.add.existing(tree1);
            // this.scene.physics.add.existing(tree2);
            
            // tree1.body.setImmovable(true);
            // tree2.body.setImmovable(true);
            
            // tree1.alpha = 0;
            // tree2.alpha = 0;
            
            // obstaclesGroup.add(tree1);
            // obstaclesGroup.add(tree2);
            sceneName.text = "Field";
            symbols.setFrame(2);
        } else if (map == 4) {
            let hole1 = this.scene.add.rectangle(195, 110 + this.topUI, 120, 30, 0x6666ff);
            let hole2 = this.scene.add.rectangle(480, 320 + this.topUI, 140, 40, 0x6666ff);
            
            this.scene.physics.add.existing(hole1);
            this.scene.physics.add.existing(hole2);
            
            hole1.body.setImmovable();
            hole2.body.setImmovable();
            
            hole1.alpha = 0;
            hole2.alpha = 0;
            
            holesGroup.add(hole1);
            holesGroup.add(hole2);
            
            let rock1 = this.scene.add.rectangle(445, 35 + this.topUI, 160, 30, 0x6666ff);
            let rock2 = this.scene.add.rectangle(180, 295 + this.topUI, 190, 60, 0x6666ff);
            
            this.scene.physics.add.existing(rock1);
            this.scene.physics.add.existing(rock2);
            
            rock1.body.setImmovable(true);
            rock2.body.setImmovable(true);
            
            rock1.alpha = 0;
            rock2.alpha = 0;
            
            obstaclesGroup.add(rock1);
            obstaclesGroup.add(rock2);
            
            piece2.alpha = 1;
            sceneName.text = "Field";
            symbols.setFrame(3);
        } else if (map == 5) {
            let hole1 = this.scene.add.rectangle(175, 310 + this.topUI, 140, 40, 0x6666ff);
            let hole2 = this.scene.add.rectangle(480, 315 + this.topUI, 120, 40, 0x6666ff);
            
            this.scene.physics.add.existing(hole1);
            this.scene.physics.add.existing(hole2);
            
            hole1.body.setImmovable(true);
            hole2.body.setImmovable(true);
            
            hole1.alpha = 0;
            hole2.alpha = 0;
            
            holesGroup.add(hole1);
            holesGroup.add(hole2);
        
            let pond = this.scene.add.rectangle(320, 90 + this.topUI, 320, 80, 0x6666ff);
            
            this.scene.physics.add.existing(pond);
            
            pond.body.setImmovable(true);
            
            pond.alpha = 0;
            
            obstaclesGroup.add(pond);
            
            piece3.alpha = 1;
            sceneName.text = "Pond";
            symbols.setFrame(4);
        } else if (map == 6) {
            let tree1 = this.scene.add.rectangle(460, 60 + this.topUI, 100, 10, 0x6666ff);
            let tree2 = this.scene.add.rectangle(470, 350 + this.topUI, 150, 40, 0x6666ff);
            let tree3 = this.scene.add.rectangle(250, 180 + this.topUI, 130, 10, 0x6666ff);
            
            this.scene.physics.add.existing(tree1);
            this.scene.physics.add.existing(tree2);
            this.scene.physics.add.existing(tree3);
            
            tree1.body.setImmovable();
            tree2.body.setImmovable();
            tree3.body.setImmovable();
            
            tree1.alpha = 0;
            tree2.alpha = 0;
            tree3.alpha = 0;
            
            obstaclesGroup.add(tree1);
            obstaclesGroup.add(tree2);
            obstaclesGroup.add(tree3);
            
            piece1.alpha = 1;
            sceneName.text = "Field";
            symbols.setFrame(6);
        }else if(map == 2){
            sceneName.text = "DC";
            symbols.setFrame(1);
        }else if(map == 1){
            sceneName.text = "Forest";
            symbols.setFrame(5);
        }
    }
    
    updateEnergy() {
        energy--;

        if (energy === 0)
        {
            this.scene.gameOver = true;
        }
    }
}