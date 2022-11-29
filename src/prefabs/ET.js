class ET extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.scene.physics.add.existing(this);
        //this.sfxET = scene.sound.add('sound-name');
        this.speed = 4;
        this.hudHeight = 2 * 47;
        this.horizontalMargin = 43;
        this.topMargin = 25;
        this.VELOCITY = 400;
    }

    update(bg){
        this.setScale(2);
        //movement
        if(keyUP.isDown){
            // this.y -= this.speed;
            this.body.setVelocityY(-this.VELOCITY);
        } else if(keyDOWN.isDown){
            // this.y += this.speed;
            this.body.setVelocityY(this.VELOCITY);
        } else if(keyLEFT.isDown){
            // this.x -= this.speed;
            this.body.setVelocityX(-this.VELOCITY);
            this.setFlipX(true);
        } else if(keyRIGHT.isDown){
            // this.x += this.speed;
            this.body.setVelocityX(this.VELOCITY);
            this.setFlipX(false);
        } else if (!keyRIGHT.isDown && !keyLEFT.isDown && !keyDOWN.isDown && !keyUP.isDown) {
            this.body.setVelocityX(0);
            this.body.setVelocityY(0);
        }

        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            //this is where E.T.'s special ability goes
        }

        if(this.x < -this.horizontalMargin){
            //if ET goes past the left screen border
            //temporary fix:
            this.x = game.config.width - this.horizontalMargin - 2*this.width;
            if (bg_map == 1) {
                bg_map = 3;
                // bg.setTexture('map' + 3);
            } else if (bg_map == 2) {
                bg_map = 3;
                // bg.setTexture(3);
            } else if (bg_map == 3) {
                bg_map = 4;
                // bg.setTexture(4);
            } else if (bg_map == 4) {
                bg_map = 5;
                // bg.setTexture(5);
            } else if (bg_map == 5) {
                bg_map = 2;
                // bg.setTexture(2);
            } else if (bg_map == 6) {
                bg_map = 5;
                // bg.setTexture(5);
            }
            this.updateMap(bg_map);
        }
        if(this.x > game.config.width-this.horizontalMargin){
            //if ET goes past the right screen border
            //temporary fix
            this.x = this.horizontalMargin;
            if (bg_map == 1) {
                bg_map = 5;
                // bg.setTexture(5);
            } else if (bg_map == 2) {
                bg_map = 5;
                // bg.setTexture(5);
            } else if (bg_map == 3) {
                bg_map = 2;
                // bg.setTexture(2);
            } else if (bg_map == 4) {
                bg_map = 3;
                // bg.setTexture(3);
            } else if (bg_map == 5) {
                bg_map = 4;
                // bg.setTexture(4);
            } else if (bg_map == 6) {
                bg_map = 3;
                // bg.setTexture(3);
            }
            this.updateMap(bg_map);
        }
        if(this.y < this.topMargin){
            //if ET goes past the top screen border
            //temporary fix
            this.y = game.config.height - 2*this.height - this.hudHeight;
            if (bg_map == 1) {
                bg_map = 4;
                // bg.setTexture(4);
            } else if (bg_map == 2) {
                bg_map = 1;
                // bg.setTexture(1);
            } else if (bg_map == 3) {
                bg_map = 1;
                // bg.setTexture(1);
            } else if (bg_map == 4) {
                bg_map = 1;
                // bg.setTexture(1);
            } else if (bg_map == 5) {
                bg_map = 1;
                // bg.setTexture(1);
            } else if (bg_map == 6) {
                bg_map = 4;
                // bg.setTexture(4);
            }
            this.updateMap(bg_map);
        }
        if(this.y > game.config.height - 2*this.height - this.hudHeight){
            //if ET goes past the bottom screen border
            //temporary fix
            this.y = this.topMargin;
            if (bg_map == 1) {
                bg_map = 2;
                // bg.setTexture(2);
            } else if (bg_map == 2) {
                bg_map = 6;
                // bg.setTexture(6);
            } else if (bg_map == 3) {
                bg_map = 6;
                // bg.setTexture(6);
            } else if (bg_map == 4) {
                bg_map = 6;
                // bg.setTexture(6);
            } else if (bg_map == 5) {
                bg_map = 6;
                // bg.setTexture(6);
            } else if (bg_map == 6) {
                bg_map = 2;
                // bg.setTexture(2);
            }
            this.updateMap(bg_map);
        }
    }

    reset(){
        this.x = game.config.width/2 - 43;
        this.y = game.config.height/2 - 63;
    }
    
    updateMap(map) {
        bg.setTexture('map' + map);
        obstaclesGroup.clear(true);
        holesGroup.clear(true);
        
        if (map == 3) {
            let hole1 = this.scene.add.rectangle(325, 125, 100, 45, 0x6666ff);
            let hole2 = this.scene.add.rectangle(325, 275, 100, 45, 0x6666ff);
            
            this.scene.physics.add.existing(hole1);
            this.scene.physics.add.existing(hole2);
            
            hole1.body.setImmovable();
            hole2.body.setImmovable();
            
            hole1.alpha = 0;
            hole2.alpha = 0;
            
            holesGroup.add(hole1);
            holesGroup.add(hole2);
            
            let tree1 = this.scene.add.rectangle(140, 300, 45, 140, 0x6666ff);
            let tree2 = this.scene.add.rectangle(520, 300, 45, 140, 0x6666ff);
            
            this.scene.physics.add.existing(tree1);
            this.scene.physics.add.existing(tree2);
            
            tree1.body.setImmovable(true);
            tree2.body.setImmovable(true);
            
            tree1.alpha = 0;
            tree2.alpha = 0;
            
            obstaclesGroup.add(tree1);
            obstaclesGroup.add(tree2);
        } else if (map == 4) {
            let hole1 = this.scene.add.rectangle(195, 110, 120, 30, 0x6666ff);
            let hole2 = this.scene.add.rectangle(480, 320, 140, 40, 0x6666ff);
            
            this.scene.physics.add.existing(hole1);
            this.scene.physics.add.existing(hole2);
            
            hole1.body.setImmovable();
            hole2.body.setImmovable();
            
            hole1.alpha = 0;
            hole2.alpha = 0;
            
            holesGroup.add(hole1);
            holesGroup.add(hole2);
            
            let rock1 = this.scene.add.rectangle(445, 35, 160, 30, 0x6666ff);
            let rock2 = this.scene.add.rectangle(180, 295, 190, 60, 0x6666ff);
            
            this.scene.physics.add.existing(rock1);
            this.scene.physics.add.existing(rock2);
            
            rock1.body.setImmovable(true);
            rock2.body.setImmovable(true);
            
            rock1.alpha = 0;
            rock2.alpha = 0;
            
            obstaclesGroup.add(rock1);
            obstaclesGroup.add(rock2);
        } else if (map == 5) {
            let hole1 = this.scene.add.rectangle(175, 310, 140, 40, 0x6666ff);
            let hole2 = this.scene.add.rectangle(480, 315, 120, 40, 0x6666ff);
            
            this.scene.physics.add.existing(hole1);
            this.scene.physics.add.existing(hole2);
            
            hole1.body.setImmovable(true);
            hole2.body.setImmovable(true);
            
            hole1.alpha = 0;
            hole2.alpha = 0;
            
            holesGroup.add(hole1);
            holesGroup.add(hole2);
        
            let pond = this.scene.add.rectangle(320, 90, 320, 80, 0x6666ff);
            
            this.scene.physics.add.existing(pond);
            
            pond.body.setImmovable(true);
            
            pond.alpha = 0;
            
            obstaclesGroup.add(pond);
        } else if (map == 6) {
            let tree1 = this.scene.add.rectangle(460, 60, 90, 50, 0x6666ff);
            let tree2 = this.scene.add.rectangle(490, 300, 150, 80, 0x6666ff);
            let tree3 = this.scene.add.rectangle(250, 190, 130, 70, 0x6666ff);
            
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
        }
    }
}