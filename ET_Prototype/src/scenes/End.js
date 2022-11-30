class End extends Phaser.Scene{
    constructor(){
        super('endScene');
    }

    create(){
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCode.SPACE);

    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('menuScene');
        }
    }
}