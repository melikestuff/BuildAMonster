class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        //Hand constants
        this.leftHandX = this.bodyX - 105;
        this.leftHandY = this.bodyY + 20;

        this.rightHandX = this.bodyX + 105;
        this.rightHandY = this.bodyY + 20;

        //Leg constants
        this.leftLegX = this.bodyX - 85;
        this.leftLegY = this.bodyY + 100;

        this.rightLegX = this.bodyX + 85;
        this.rightLegY = this.bodyY + 100;

        //Eye constant
        this.EyeX = this.bodyX;
        this.EyeY = this.bodyY + -50;

        //Head decorations

        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 20;

        this.noseX = this.bodyX;
        this.noseY = this.bodyY - 80;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        let body = my
        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueD.png");
        
        //creates left hand
        my.sprite.leftHand = this.add.sprite(this.leftHandX, this.leftHandY, "monsterParts", "arm_greenE.png");
        my.sprite.leftHand.flipX = true;

        //Creates right hand
        my.sprite.rightHand = this.add.sprite(this.rightHandX, this.rightHandY, "monsterParts", "arm_redE.png");
        //my.sprite.leftHand.flipX = true; leg_redE.png

        //creates legs
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_yellowE.png");

        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_yellowE.png");
        my.sprite.leftLeg.flipX = true;

        //Create eye
        my.sprite.eye = this.add.sprite(this.EyeX, this.EyeY, "monsterParts", "eye_human_green.png");

        //create head decorations
        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_yellow.png");

        my.sprite.mouthSmile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthH.png");
        my.sprite.mouthFangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouthFangs.visible = false;

        //Sets up keys for input handling
        this.sKey = this.input.keyboard.addKey('S');
        this.fKey = this.input.keyboard.addKey('F');

        this.aKey = this.input.keyboard.addKey('A');
        this.dKey = this.input.keyboard.addKey('D');
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        //Checks if S or F key(s) are pressed, and changes the mouth visibility.
        if (Phaser.Input.Keyboard.JustDown(this.sKey)) {
            console.log("Changing mouth to smile");
            my.sprite.mouthSmile.visible = true;
            my.sprite.mouthFangs.visible = false;
        }

        if (Phaser.Input.Keyboard.JustDown(this.fKey)) {
            console.log("Changing mouth to fangs");
            my.sprite.mouthSmile.visible = false;
            my.sprite.mouthFangs.visible = true;
        }

        if (this.aKey.isDown) {
            for (let key in my.sprite) {
                //console.log(my.sprite[key]);
                //console.log(my.sprite[key].x);
                my.sprite[key].x = my.sprite[key].x - 1;
            }
        }

        if (this.dKey.isDown) {
            for (let key in my.sprite) {
                //console.log(my.sprite[key]);
                //console.log(my.sprite[key].x);
                my.sprite[key].x = my.sprite[key].x + 1;
            }
        }



        //Checks if A or D key(s) are pressed, and moves the creature accordingly.
    }

}