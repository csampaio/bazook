"use strict"; 

var SplashState = function(game) {};


SplashState.prototype.preload = function() {
};

SplashState.prototype.create = function() {
    this.game.add.sprite(0,0, 'bgSplash')
    
//    var sprite = this.game.add.sprite(0, 0, 'bgSplash');
//    sprite.alpha = 0;
//    this.game.add.tween(sprite).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, false, 0, 1000, true);
    
    this.game.time.events.add(Phaser.Timer.SECOND * 3, gotoMenu, this);
};

SplashState.prototype.update = function() {
};