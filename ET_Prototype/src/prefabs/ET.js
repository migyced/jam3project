class ET extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        //this.sfxET = scene.sound.add('sound-name');
        this.speed = 4;
        this.hudHeight = 2*47
        this.horizontalMargin = 2*32;
        this.topMargin = 25;
    }

    update(bg){
        //movement
        if(keyUP.isDown){
            this.y -= this.speed;
        }
        if(keyDOWN.isDown){
            this.y += this.speed;
        }
        if(keyLEFT.isDown){
            this.x -= this.speed;
        }
        if(keyRIGHT.isDown){
            this.x += this.speed;
        }

        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            //this is where E.T.'s special ability goes
        }

        if(this.x < this.horizontalMargin){
            //if ET goes past the left screen border
            //temporary fix:
            this.x = game.config.width - this.horizontalMargin - 2*this.width;
            if(bg.frame == 1){
                bg.frame = 3;
            }else if(bg.frame == 2){
                bg.frame = 3
            }else if(bg.frame == 3){
                bg.frame = 4;
            }else if(bg.frame == 4){
                bg.frame = 5;
            }else if(bg.frame == 5){
                bg.frame = 2;
            }else if(bg.frame == 6){
                bg.frame = 5;
            }
        }
        if(this.x > game.config.width-this.horizontalMargin){
            //if ET goes past the right screen border
            //temporary fix
            this.x = this.horizontalMargin;
        }
        if(this.y < this.topMargin){
            //if ET goes past the top screen border
            //temporary fix
            this.y = game.config.height - 2*this.height - this.hudHeight;
        }
        if(this.y > game.config.height - 2*this.height - this.hudHeight){
            //if ET goes past the bottom screen border
            //temporary fix
            this.y = this.topMargin;
        }
    }

    reset(){
        this.x = game.config.width/2;
        this.y = game.config.height/2;
    }
}