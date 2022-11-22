let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 420,
    scene: [Load, Menu, Play, End]
}

let game = new Phaser.Game(config);
var bg;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyRIGHT, keyLEFT, keySPACE, keyUP, keyDOWN;