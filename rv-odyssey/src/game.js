let gameScene = new Phaser.Scene('Game'); 

// Load Assets 
gameScene.preload = function(){
    // Load images
    this.load.image('outside', 'https://i.ibb.co/4sKZq6L/outside.png');
    this.load.image('mcIdle','https://i.ibb.co/HDYtmw6/mc-idle-static.png');
    this.load.image('bug','https://i.ibb.co/p1Lcbwq/bug.png');
    this.load.image('platform', 'https://i.ibb.co/0VDqWp6/platform.png');
}

function create ()
{
    this.add.image(400, 300, 'outside');
    this.add.image(40,450,'platform');
    this.add.image(0,430,'mcIdle');
    this.add.image(50,50,'bug');

    // Set the sprite origin to the top-left corner
    outside.setOrigin(0,0);
    mcIdle.setOrigin(0, 0);

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'platform').setScale(2).refreshBody();

    platforms.create(600, 400, 'platform');
    platforms.create(50, 250, 'platform');
    platforms.create(750, 220, 'platform');

    platforms.create(600, 400, 'platform');
    platforms.create(50, 250, 'platform');
    platforms.create(750, 220, 'platform');

    player = this.physics.add.sprite(100, 450, 'mcIdle');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    player.body.setGravityY(300);

    this.physics.add.collider(player, platforms);


}

gameScene.update = function() {
    cursors = this.input.keyboard.createCursorKeys();

        if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }

    
}



var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

  
  
  