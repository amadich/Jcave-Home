class play extends Phaser.Scene {
    constructor() {
        super("playGame");
    } 
    preload() {
         // animation of joly_move 

         this.anims.create({
            key: "walk_joly",
            frameRate: 10,
            frames: this.anims.generateFrameNames("joly", {
                //prefix: "-",
                suffix: ".png",
                start: 144,
                end: 151,
                zeroPad: 3
            }),
            repeat: -1
        });


         // animation of sara_move 

         this.anims.create({
            key: "walk_sara",
            frameRate: 10,
            frames: this.anims.generateFrameNames("sara", {
                //prefix: "-",
                suffix: ".png",
                start: 144,
                end: 151,
                zeroPad: 3
            }),
            repeat: -1
        });


        // animation of tom_move

        this.anims.create({
            key: "walk_tom",
            frameRate: 10,
            frames: this.anims.generateFrameNames("tom", {
                //prefix: "-",
                suffix: ".png",
                start: 144,
                end: 151,
                zeroPad: 3
            }),
            repeat: -1
        });

         // animation of tom_d

         this.anims.create({
            key: "tom_d",
            frameRate: 10,
            frames: this.anims.generateFrameNames("tom", {
                //prefix: "-",
                suffix: ".png",
                start: 195,
                end: 200,
                zeroPad: 3
            }),
            repeat: 1
        });
    }
    create() {
        this.input.setDefaultCursor('url(public/assets/input/cursors/2392.png), pointer');
        let bg = this.cameras.main.setBackgroundColor(0x222)
        // tiles map 1 
        const map = this.make.tilemap({ key:'tiles', tileWidth: 32, tileHeight: 32});
        const tileset = map.addTilesetImage("terrain_atlas","map");
        const layer = map.createLayer("back", tileset ,0, 0).setPipeline('Light2D');
        const layer1 = map.createLayer("grass", tileset ,0, 0).setPipeline('Light2D');
        const layer2 = map.createLayer("place_v", tileset ,0, 0).setPipeline('Light2D');
        const layer3 = map.createLayer("objet_n", tileset ,0, 0).setPipeline('Light2D');
        const layer4 = map.createLayer("jesser", tileset ,0, 0).setPipeline('Light2D');
        const layer5 = map.createLayer("more", tileset ,0, 0).setPipeline('Light2D');
        const layer6 = map.createLayer("lava", tileset ,0, 0)


        // tile map 2 
        const map2 = this.make.tilemap({ key:'tiles_s', tileWidth: 32, tileHeight: 32});
        const tileset2 = map2.addTilesetImage("terrain_atlas","map");
        const layer_s = map2.createLayer("back_2", tileset2 ,960, 0).setPipeline('Light2D').setDepth(-1);
        const layer_s_1 = map2.createLayer("grass_2", tileset2 ,960, 0).setPipeline('Light2D');
        const layer_s_2 = map2.createLayer("objet_s", tileset2 ,960, 0).setPipeline('Light2D');
        const layer_s_3 = map2.createLayer("jesser_2", tileset2 ,960, 0).setPipeline('Light2D');
        const layer_s_4 = map2.createLayer("add_jesser", tileset2 ,960, 0).setPipeline('Light2D');


        this.lights.addLight(750, 560, 40).setIntensity(2);

        // lights in map 2 
        this.lights.addLight(1200, 110, 40).setIntensity(2);
        /*this.lights.enable();
        this.lights.setAmbientColor(0x555555);*/
        House_WithoutDoor  = this.add.image(300,210,"House_WithoutDoor").setPipeline('Light2D');
        House_WithoutDoor.setDepth(+1);

       
        this.lights.addLight(250, 200, 100).setIntensity(2);


         let light = this.lights.addLight(300, 250, 100);
         light.setIntensity(2);
       this.lights.enable().setAmbientColor(0x555555);
       /*  this.input.on('pointermove', function (pointer) {

            light.x = pointer.x;
            light.y = pointer.y;
    
        });*/

        this.lights.addLight(700, 300, 100).setIntensity(2);
        let lamp_city = this.add.image(700,330,"lamp_city");
        lamp_city.setScale(.6);
        lamp_city.setDepth(+2)
        this.add.image(700,300,"shadow").setScale(.6).setDepth(+5);
       

// 
        joly = this.physics.add.sprite(200,300,"joly").setPipeline('Light2D');
        joly.setSize(32,64)
        joly.setBounce(0.2);
        joly.refreshBody();
        joly.anims.play("walk_joly",true);
        //joly.setCollideWorldBounds(true);

        this.physics.add.collider(joly,layer3);
        layer3.setCollisionBetween(396,399);

       


        console.log(layer3.y);

        // add tom

        tom = this.physics.add.sprite(700,100,"tom").setPipeline('Light2D');;
        tom.setSize(32,64)
        tom.anims.play("walk_tom",true);
        tom.setCollideWorldBounds(true);

        this.physics.add.collider(tom,layer3);
        layer3.setCollisionBetween(396,399);



        // add sara

        sara = this.physics.add.sprite(700,400,"sara").setPipeline('Light2D');;
        sara.setSize(32,64)
        sara.anims.play("walk_sara",true);
        
        this.physics.add.collider(sara,layer3);
        layer3.setCollisionBetween(396,399);
       


// cameras follows

this.cameras.main.setBounds(0, 0, 800*5, 600);
this.cameras.main.startFollow(joly);

        // Full screen Page
        var FKey = this.input.keyboard.addKey('F');

        FKey.on('down', function () {

            if (this.scale.isFullscreen)
            {
                //button.setFrame(0);
                this.scale.stopFullscreen();
            }
            else
            {
               // button.setFrame(1);
                this.scale.startFullscreen();
            }

        }, this);
        // End Full_Screen


        cursors = this.input.keyboard.createCursorKeys();


    }
    update() {


       


        /* tom */
        //tom.setVelocityX(0);
        tom.setVelocityY(0);

        // random moving

     
       

        if (tom.x == 200) {
            tom.setVelocityX(60);
            tom.flipX = false;
            setTimeout(() => {
                tom.setVelocityX(0)
                tom.anims.play("tom_d",true);
                setTimeout(() => {
                    tom.setVelocityX(60)
                    tom.anims.play("walk_tom",true);
                },1000)
            },1000)
            
        }

        if (tom.x > 600) {
            tom.setVelocityX(-60);
            tom.flipX = true;
           
            }

        /*if (tom.x == 400) {
             ok = true;
        }

        if (ok == true) {
            tom.setVelocityY(60);
            setTimeout(() => {
                ok = false;
                ok1 = true;
            },2000)
        }
        else if(ok1 == true) {
            tom.setVelocityY(-60);
        }

        if(tom.y < 200) {
            tom.setVelocityY(60);
        }*/


           

                /* joly */ 

        //joly.setVelocityX(0);
        joly.setVelocityY(0);

        // random moving

     
       

        if (joly.x == 200) {
            joly.setVelocityX(60);
            joly.flipX = false;
           
            
        }

        if (joly.x < 20) {
            joly.setVelocityX(60);
            joly.flipX = false;  
        }

        if (joly.x > 600) {
            joly.setVelocityX(-60);
            joly.flipX = true;
           
            }

                    // sara


            if (sara.x == 700) {
                sara.setVelocityX(60);
                sara.flipX = false;
               
                
            }
    
            if (sara.x < 20) {
                sara.setVelocityX(60);
                sara.flipX = false;  
            }
    
            if (sara.x > 1400) {
                sara.setVelocityX(-60);
                sara.flipX = true;
               
                }
    

            
/*
        if (joly.x == 400) {
             ok = true;
        }

        if (ok == true) {
            joly.setVelocityY(60);
            setTimeout(() => {
                ok = false;
                ok1 = true;
            },2000)
        }
        else if(ok1 == true) {
            joly.setVelocityY(-60);
        }

        if(joly.y < 200) {
            joly.setVelocityY(60);
        }
*/

           

            
        

           
        // controles
        if (cursors.right.isDown) {
            joly.setVelocityX(90);
            joly.anims.play('walk_joly', true);
            joly.flipX = false;
        }

        if (cursors.left.isDown) {
            joly.setVelocityX(-90);
            joly.anims.play('walk_joly', true);
            joly.flipX = true;
        }

        if (cursors.up.isDown) {
            joly.setVelocityY(-90);
            joly.anims.play('walk_joly', true);
            joly.flipX = true;
        }

        if (cursors.down.isDown) {
            joly.setVelocityY(90);
            joly.anims.play('walk_joly', true);
            joly.flipX = true;
        }

    }
}