var gamejs = require('gamejs');
// custom
var sprites = require('./sprites');
var Square = sprites.Square;
var Core = sprites.Core;

var Level = exports.Level = function() {

   var self = this;
   this.handleEvent = function(event) {
      if (event.type === gamejs.event.MOUSE_UP) {
         if (line) {
            // FIXME drag and drop, line stuff
         } else {
            // click on square?
            var clickedSquares = squares.collidePoint(event.pos);
            if (clickedSquares.length) {
               var square = clickedSquares[0];
               if (square.size > 1) {
                  breakUp(square);
               }
            }
         }
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

   function breakUp(square) {
      var newSize = square.size - 1;
      squares.remove(square);
      var r = square.rect;
      for (var x in [0,1,2]) {
         for (var y in [0,1,2]) {
            var sx = r.left + (x * (r.width / 3));
            var sy = r.top + (y * (r.width / 3));
            squares.add(new Square({
               pos: [sx, sy],
               size: newSize,
               direction: square.direction
            }));
         }
      }
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
   // interaction
   var line = null;
   var selected = null;

   // FIXME level specific, pass in level name as constructor
   // and lookup config in hash
   var config = {
      squares: [
         new Square({pos: [200, 200], size: 2}),
         new Square({pos: [200, 400], size: 3})
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

exports.StartScreen = function(director) {

   function startGame() {
      director.replaceScene(new Level());
   };

   this.handleEvent = function(event) {
      if (event.type === gamejs.event.MOUSE_UP) {
         startGame();
      };
   };

   this.update = function(msDuration) {
      waitMs += msDuration;
      if (waitMs > 2000) {
         startGame();
      }
   };

   this.draw = function(display) {
      display.blit(bg);
   };
   var bg = gamejs.image.load('images/about-screen.png');
   var waitMs = 0;
   return this;
};
