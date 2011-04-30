var gamejs = require('gamejs');
// custom
var config = require('./config');
var scenes = require('./scenes');

gamejs.preload([
   'images/corners.png',
   'images/core.png',
   'images/2x.png'
]);

gamejs.ready(function() {
   var display = gamejs.display.setMode([config.WIDTH, config.HEIGHT]);
   var testLevel = new scenes.Level();
   gamejs.loop(tick, this, 30);

   function tick(msDuration) {
      gamejs.event.get().forEach(testLevel.handleEvent);
      testLevel.update(msDuration);
      testLevel.draw(display);
      return;
   };
   return;
});
