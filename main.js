var gamejs = require('gamejs');
// custom
var Director = require('./game').Director;
var scenes = require('./scenes');

gamejs.preload([
   'images/corners.png',
   'images/core.png',
   'images/2x.png',
   'images/about-screen.png'
]);

gamejs.ready(function() {
   var director = new Director();
   var firstScene = new scenes.StartScreen(director);
   director.start(firstScene);
   return;
});
