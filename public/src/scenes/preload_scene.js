class preload_scene extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload() {
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);
        
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);
        
        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);
        
        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        assetText.setOrigin(0.5, 0.5);
        
        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });
        
        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });
        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });

        // loading ...

        // tiles
        this.load.image("map","public/assets/terrain_atlas.png");
        this.load.tilemapTiledJSON("tiles","public/tiles/map.json");
        this.load.tilemapTiledJSON("tiles_s","public/tiles/map_s.json");


        // sprites
        this.load.atlas("joly","public/assets/sprites/joly.png","public/assets/sprites/joly.json");
        this.load.atlas("tom","public/assets/sprites/tom.png","public/assets/sprites/tom.json");
        this.load.atlas("sara","public/assets/sprites/sara.png","public/assets/sprites/sara.json");

        // images
        this.load.image("House_WithoutDoor","public/assets/House_WithoutDoor.png");
        this.load.image("lamp_city","public/assets/lamp_city.png");
        this.load.image("shadow","public/assets/shadow.png");





    }
    create() {
        this.scene.start("playGame");
    }
 }