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
        this.setScale(2);
        //movement
        if(keyUP.isDown){
            this.y -= this.speed;
        }
        if(keyDOWN.isDown){
            this.y += this.speed;
        }
        if(keyLEFT.isDown){
            this.x -= this.speed;
            this.setFlipX(true);
        }
        if(keyRIGHT.isDown){
            this.x += this.speed;
            this.setFlipX(false);
        }

        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            //this is where E.T.'s special ability goes
        }

        if(this.x < this.horizontalMargin){
            //if ET goes past the left screen border
            //temporary fix:
            this.x = game.config.width - this.horizontalMargin - 2*this.width;
            if(bg.frame.name == 1){
                bg.setFrame(3);
            }else if(bg.frame.name == 2){
                bg.setFrame(3);
            }else if(bg.frame.name == 3){
                bg.setFrame(4);
            }else if(bg.frame.name == 4){
                bg.setFrame(5);
            }else if(bg.frame.name == 5){
                bg.setFrame(2);
            }else if(bg.frame.name == 6){
                bg.setFrame(5);
            }
        }
        if(this.x > game.config.width-this.horizontalMargin){
            //if ET goes past the right screen border
            //temporary fix
            this.x = this.horizontalMargin;
            if(bg.frame.name == 1){
                bg.setFrame(5);
            }else if(bg.frame.name == 2){
                bg.setFrame(5);
            }else if(bg.frame.name == 3){
                bg.setFrame(2);
            }else if(bg.frame.name == 4){
                bg.setFrame(3);
            }else if(bg.frame.name == 5){
                bg.setFrame(4);
            }else if(bg.frame.name == 6){
                bg.setFrame(3);
            }
        }
        if(this.y < this.topMargin){
            //if ET goes past the top screen border
            //temporary fix
            this.y = game.config.height - 2*this.height - this.hudHeight;
            if(bg.frame.name == 1){
                bg.setFrame(4);
            }else if(bg.frame.name == 2){
                bg.setFrame(1);
            }else if(bg.frame.name == 3){
                bg.setFrame(1);
            }else if(bg.frame.name == 4){
                bg.setFrame(1);
            }else if(bg.frame.name == 5){
                bg.setFrame(1);
            }else if(bg.frame.name == 6){
                bg.setFrame(4);
            }
        }
        if(this.y > game.config.height - 2*this.height - this.hudHeight){
            //if ET goes past the bottom screen border
            //temporary fix
            this.y = this.topMargin;
            if(bg.frame.name == 1){
                bg.setFrame(2);
            }else if(bg.frame.name == 2){
                bg.setFrame(6);
            }else if(bg.frame.name == 3){
                bg.setFrame(6);
            }else if(bg.frame.name == 4){
                bg.setFrame(6);
            }else if(bg.frame.name == 5){
                bg.setFrame(6);
            }else if(bg.frame.name == 6){
                bg.setFrame(2);
            }
        }
    }

    reset(){
        this.x = game.config.width/2;
        this.y = game.config.height/2;
    }
}