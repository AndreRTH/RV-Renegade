// // Create a new scene 
// let gameScene = new Phaser.Scene('Game'); 

// // Load Assets 
// gameScene.preload = function(){
//     // Load images
//     this.load.image('outside', './rv-odyssey/assets/environment/outside.PNG');
//     this.load.image('ayshya', './rv-odyssey/assets/sprites/Huntress:AyShya/Sprites/Idle.PNG');
// };

// // Called once after preload ends 
// gameScene.create = function(){
//     // Create sprite 
//     this.add.sprite(0, 0, 'outside');
// }

// // Set the configuration for the scene 
// let config = {
//     type: Phaser.AUTO, 
//     width: 800, 
//     height: 600, 
//     scene: gameScene
// };

// // Create a new game and pass the configuration 
// let game = new Phaser.Game(config);