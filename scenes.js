var gamejs = require('gamejs');
// custom
var sprites = require('./sprites');
var Square = sprites.Square;
var Core = sprites.Core;

exports.Level = function() {

   var self = this;
   this.handleEvent = function(event) {
      if (event.type === gamejs.event.MOUSE_UP) {
         // FIXME interaction
      };
      return;
   };

   this.update = function(msDuration) {
      squares.update(msDuration);
      return;
   };

   this.draw = function(display) {
      display.fill(config.bgColor);
      display.blit(corners);

      squares.draw(display);
      walls.draw(display);
      cores.draw(display);
      return;
   };

   function fillLevel() {
      config.squares.forEach(function(s) {
         squares.add(s);
      });
      config.walls.forEach(function(w) {
         walls.add(w);
      });
      config.cores.forEach(function(c) {
         cores.add(c);
      });
      return;
   };

   /**
    * constructor
    */
   var corners = gamejs.image.load('images/corners.png');
   var line = [[0,0], [0,0]];
   // FIXME level specific
   var config = {
      squares: [
         new Square({pos: [200, 200], size: 2}),
         new Square({pos: [200, 400], size: 2})
      ],
      cores: [new Core([950, 250])],
      walls: [],
      bgColor: '#00ff00'
   }
   var squares = new gamejs.sprite.Group();
   var walls = new gamejs.sprite.Group();
   var cores = new gamejs.sprite.Group();

   fillLevel()
   return this;
};
