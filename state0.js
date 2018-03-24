var demo = {};
var centerX = 1500/2, centerY = 1000/2;
var elf, speed =4;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.image('elf', 'assets/sprites/PiskelElf.png');
        game.load.image('treeBg', 'assets/backgrounds/phaserBg.png');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#00ff99';
        console.log('state0');
        
        addChangeStateEventListeners();
        game.world.setBounds(0, 0, 2813, 1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        var treeBg = game.add.sprite(0,0, 'treeBg');
        
        elf = game.add.sprite(centerX, centerY, 'elf');
        //elf.anchor.x = 0.5;
        //elf.anchor.y = 0.5;
        elf.anchor.setTo(0.5, 0.5);
        elf.scale.setTo(0.8, 0.8);
        game.physics.enable(elf);
        elf.body.collideWorldBounds = true;
        
        game.camera.follow(elf);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            elf.scale.setTo(0.8, 0.8);
            elf.x += speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            elf.scale.setTo(-0.8, 0.8);
            elf.x -= speed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            elf.y -= speed;
            if(elf.y < 368){
                elf.y = 368;
            }
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            elf.y += speed;
        }
    }
};

function changeState(i, stateNum) {
    game.state.start('state' + stateNum);
}

function addKeyCallBack(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(changeState, null, null, args);
}

function addChangeStateEventListeners(){
    addKeyCallBack(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallBack(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallBack(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallBack(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallBack(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallBack(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallBack(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallBack(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallBack(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallBack(Phaser.Keyboard.NINE, changeState, 9);
}