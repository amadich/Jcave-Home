const config = {
    type: Phaser.WEBGL,
    type: Phaser.AUTO,
    pixelArt: true,
    //zoom: 1.4,
    //width: 800,
    //height: 700,
    scale: {
      mode: Phaser.Scale.FIT,
      parent: 'phaser-example',
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 800,
      height: 500
  },
  physics: {
      default: "arcade",
      arcade: {
          debug: false
      }
  }
  ,
    backgroundColor: "222",
    scene: [
        preload_scene,
        play
    ]
}
let game = new Phaser.Game(config); 
let joly;
let tom;
let sara;
let cursors;
let ok = false;
let ok1 = false;
let House_WithoutDoor;