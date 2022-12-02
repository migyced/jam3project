class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene');
    }

    create(){
        bg = this.add.sprite(game.config.width/2, game.config.height/2,'menu_bg', 0).setScale(1.33);   
        this.tweens.add ({
            targets: [this.add.sprite(game.config.width/2, game.config.height/2, 'stars', 0).setScale(1.33)],
            alpha: 0.5,
            duration: 1500,
            loop: -1,
            yoyo: true,
            ease: 'Quad.easeInOut'
        });     
        this.tweens.add ({
            targets: [this.add.sprite(game.config.width/2, game.config.height/2, 'glow1', 0).setScale(1.33)],
            alpha: 0,
            duration: 3000,
            loop: -1,
            yoyo: true,
            ease: 'Quad.easeInOut'
        });
        this.tweens.add ({
            targets: [this.add.sprite(game.config.width/2, game.config.height/2, 'glow2', 0).setScale(1.33)],
            alpha: 0.25,
            duration: 3000,
            loop: -1,
            yoyo: true,
            ease: 'Quad.easeInOut'
        });
        this.tweens.add ({
            targets: [this.add.sprite(game.config.width/2, game.config.height/2, 'glow3', 0).setScale(1.33)],
            alpha: 0.5,
            duration: 3000,
            loop: -1,
            yoyo: true,
            ease: 'Quad.easeInOut'
        });
        this.add.sprite(game.config.width/2, game.config.height/2, 'moon', 0).setScale(1.33);
        this.tree1 = this.add.tileSprite(game.config.width/2, game.config.height/2, 0, 0, 'tree1').setScale(1.33);
        this.tree2 = this.add.tileSprite(game.config.width/2, game.config.height/2, 0, 0, 'tree2').setScale(1.33);

        this.blink_anim = this.anims.create ({
            key: 'blink',
            frames: this.anims.generateFrameNumbers('menu_ET', {start: 0, end: 2}),
            frameRate: 12,
            repeat: 0,
            yoyo: true
        })

        this.menu_ET = this.add.sprite(game.config.width/2, game.config.height/2, 'menu_ET', 0).setScale(1.33);
        this.blink();

        this.tweens.add({
            targets: [this.add.sprite(game.config.width/2, game.config.height/2, 'text1', 0).setScale(1.33).setAlpha(0)],
            alpha: 1,
            duration: 1000,
            ease: 'Quad.easeOut'
        })

        this.tweens.add({
            targets: [this.add.sprite(game.config.width/2, game.config.height/2, 'text2', 0).setScale(1.33).setAlpha(0)],
            alpha: 1,
            duration: 1000,
            loop: -1,
            yoyo: true,
            ease: 'Quad.easeOut'
        })

        game.global = {
            fall : false,
            reposition : true,
            bg_map : 0
        }

        //define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update(){
        let treeSpeed = 0.1
        this.tree1.tilePositionX -= treeSpeed;
        this.tree2.tilePositionX -= (treeSpeed * 2);

        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            game.global.bg_map = 1;
            this.scene.start('playScene');
        }
    }

    blink() {
        if (Phaser.Math.Between(0, 1)) {
            this.blink_anim.repeat = Phaser.Math.Between(0, 1);
            this.menu_ET.play('blink');
        }
        this.time.delayedCall(1000, this.blink, [], this);
    }
}