var gamejs = require('gamejs');
// custom
var config = require('./config');

exports.Director = function() {
   var onAir = false;
   var currentScene = null;

   function tick(msDuration) {
      if (!onAir) return;

      gamejs.event.get().forEach(currentScene.handleEvent);
      currentScene.update(msDuration);
      currentScene.draw(display);
      return;
   };


   this.start = function(scene) {
      onAir = true;
      this.replaceScene(scene);
      return;
   };

   this.replaceScene = function(scene) {
      currentScene = scene;
   };

   var display = gamejs.display.setMode([config.WIDTH, config.HEIGHT]);
   gamejs.loop(tick, this, 30);
   return this;
};
