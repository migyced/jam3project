class ET extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        //this.sfxET = scene.sound.add('sound-name');
        this.speed = 4;
        this.hudHeight = 2 * 47;
        this.horizontalMargin = 43;
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
        }
        if(this.y > game.config.height - 2*this.height - this.hudHeight){
            //if ET goes past the bottom screen border
            //temporary fix
            this.y = this.topMargin;
            if (bg_map == 1) {
                console.log("reach");
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
        }
        
        bg.setTexture('map' + bg_map);
    }

    reset(){
        this.x = game.config.width/2 - 43;
        this.y = game.config.height/2 - 63;
    }
}