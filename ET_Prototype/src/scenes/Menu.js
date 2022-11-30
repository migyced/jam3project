class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene');
    }

    create(){
        bg = this.add.sprite(game.config.width/2, game.config.height/2,'background', 0);
        bg.setScale(2);

        //define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('playScene');
        }
    }
}