var gamejs = require('gamejs');
// custom
var Director = require('./game').Director;
var scenes = require('./scenes');
gamejs.preload([
   'images/corners.png',
   'images/core.png',
   'images/1x.png',
   'images/2x.png',
   'images/3x.png',
   'images/about-screen.png',
   'images/boom.png',
   'images/wall.png',
   'images/win-screen.png',
   'images/lose-screen.png',
   'images/next-screen.png',

   'sounds/impactcrunch01.ogg',
   'sounds/impactcrunch02.ogg',
   'sounds/impactcrunch03.ogg',
   'sounds/impactcrunch05.ogg',
   'sounds/34201__themfish__glass_house1.ogg',
   'sounds/34202__themfish__glass_house2.ogg',
   'sounds/game_over.ogg',
   'sounds/30306__ERH__tension.ogg'
]);

gamejs.ready(function() {
   var director = new Director();
   var firstScene = new scenes.StartScreen(director);
   director.start(firstScene);
   return;
});
