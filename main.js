var gamejs = require('gamejs');
// custom
var Director = require('./game').Director;
var scenes = require('./scenes');
var touchSupport = require('./touch');

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

function $(id) {
   return document.getElementById(id);
}

gamejs.ready(function() {
   touchSupport.init();
   // IEBUG CHROMEBUG
   // very ugly hack until they fixes some of their
   // audio bugs we disable audio completely
   if (navigator.userAgent.indexOf('Chrome') > -1 || navigator.userAgent.indexOf('MSIE') > -1 ||
      navigator.userAgent.indexOf('Safari') > -1) {
      gamejs.mixer.Sound = function() {
         return {
            play: function() {}
         };
      };
   }
   // html GUI
   $('saveButton').addEventListener('click', function() {
      $('saveArea').value = director.getScene().getLevelDump();
   }, false);
   $('loadButton').addEventListener('click', function() {
      var dump = $('loadArea').value;
      director.getScene().setLevelDump(dump);
   }, false);
   // startup gamejs game

   var director = new Director();
   var firstScene = new scenes.StartScreen(director);
   director.start(firstScene);
   return;
});
