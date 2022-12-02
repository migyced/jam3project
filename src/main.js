let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 540,
    scene: [Load, Menu, Play],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
    },
}

let game = new Phaser.Game(config);
let bg, bg_map;
let uiBars, energyText, piecesText, sceneName;
let symbols;
let phoneUI1, phoneUI2;
let obstaclesGroup, holesGroup;
let piece1, piece2, piece3, piecesGroup;
let phone1, phone2, phone3, phoneGroup;
let maxEnergy, energy, piecesNum, phoneNum;
let npcSpawned;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyRIGHT, keyLEFT, keySPACE, keyUP, keyDOWN;