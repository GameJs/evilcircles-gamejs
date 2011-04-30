var gamejs = require('gamejs');
var $v = require('gamejs/utils/vectors');

// custom
var sprites = require('./sprites');
var Square = sprites.Square;
var Core = sprites.Core;
var Wall = sprites.Wall;
var Explosion = sprites.Explosion;
var config = require('./config');

var Level = exports.Level = function(director) {

   var self = this;
   this.handleEvent = function(event) {
      if (event.type === gamejs.event.MOUSE_UP) {
         var direction = line && $v.substract(line[0], line[1]);
         var dragDistance =  direction && $v.len(direction) || 0;
         // accell square
         if (dragDistance > config.MIN_DRAG_DISTANCE) {
            selectedSquare.shoot(direction, dragDistance);
            selectedSquare = null;
         // click on square
         } else {
            var square = getCollidingSquare(event.pos);
            if (square && square.size > 1) {
               breakUp(square);
            }
         }
         line = null;
      } else if (event.type === gamejs.event.MOUSE_DOWN) {
         selectedSquare = getCollidingSquare(event.pos);
         if (selectedSquare) {
            line = [
               event.pos,
               event.pos
            ];
         }
         return;
      } else if (event.type === gamejs.event.MOUSE_MOTION) {
         if (line) line[1] = event.pos;
      };
      return;
   };

   function getCollidingSquare(pos) {
      var clickedSquares = squares.collidePoint(pos);
      if (clickedSquares.length) {
         return clickedSquares[0];
      }
      return null;
   };

   this.update = function(msDuration) {
      squares.update(msDuration);
      explosions.update(msDuration);
      // collisions: square, cores
      gamejs.sprite.groupCollide(squares, cores, false, true).forEach(function(collision) {
         explosions.add(new Explosion(collision.a.rect.center));
         explosions.add(new Explosion(collision.b.rect.center));
      });
      // collisions: squares, walls
      gamejs.sprite.groupCollide(squares, walls, true, true).forEach(function(collision) {
         explosions.add(new Explosion(collision.a.rect.center));
         explosions.add(new Explosion(collision.b.rect.center));
      });
      squares.forEach(function(s) {
         var r = s.rect;
         if (r.right <=0 || r.bottom <= 0 || r.left >= config.WIDTH || r.top >= config.HEIGHT) {
            s.kill();
         }
         return;
      });

      // GAME OVER if all squares destroyed
      if (squares.sprites().length <= 0) {
         director.replaceScene(new GameOverScreen(director));
         return;
      }
      // NEXT LEVEL if all circles destroyed
      if (levelFinished === null && cores.sprites().length <= 0) {
         levelFinished = setTimeout(function() {
            director.replaceScene(new WinScreen(director));
         }, 2000);
         return;
      }
      return;
   };

   this.draw = function(display) {
      display.fill(levelConfig.bgColor);
      display.blit(corners);

      squares.draw(display);
      walls.draw(display);
      cores.draw(display);
      explosions.draw(display);

      if (line && selectedSquare) {
         gamejs.draw.line(display, '#ff0000', selectedSquare.rect.center, line[1], 5);
      }
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
               direction: square.direction,
               speed: square.speed
            }));
         }
      }
      return;
   };

   function fillLevel(levelConfig) {
      levelConfig.squares.forEach(function(s) {
         squares.add(s);
      });
      levelConfig.walls.forEach(function(w) {
         walls.add(w);
      });
      levelConfig.cores.forEach(function(c) {
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
   var selectedSquare = null;

   // FIXME level specific, pass in level name as constructor
   // and lookup config in hash
   var levelConfig = {
      squares: [
         new Square({pos: [200, 200], size: 2}),
         new Square({pos: [200, 400], size: 3})
      ],
      cores: [new Core([950, 250])],
      walls: [new Wall([870, 210]), new Wall([870, 230]), new Wall([870, 250]),
              new Wall([870, 270]), new Wall([870, 290]), new Wall([870, 310])],
      bgColor: '#00ff00'
   }

   var squares = new gamejs.sprite.Group();
   var walls = new gamejs.sprite.Group();
   var cores = new gamejs.sprite.Group();
   var explosions = new gamejs.sprite.Group();
   fillLevel(levelConfig)

   var levelFinished = null;

   return this;
};

exports.StartScreen = function(director) {

   this.handleEvent = function(event) {
      if (event.type === gamejs.event.MOUSE_UP) {
         director.replaceScene(new Level(director));
      };
   };

   this.update = function(msDuration) {
      waitMs += msDuration;
      if (waitMs > 10000) {
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

var WinScreen = function(director) {
   this.handleEvent = function(event) {
      if (event.type === gamejs.event.MOUSE_UP) {
         director.replaceScene(new Level(director));
      };
   };

   this.update = function() {
   };
   this.draw = function(display) {
      display.blit(bg);
   };
   var bg = gamejs.image.load('images/win-screen.png');
   return this;
};

var GameOverScreen = function(director) {
   this.handleEvent = function(event) {
      if (event.type === gamejs.event.MOUSE_UP) {
         director.replaceScene(new Level(director));
      };
   };

   this.update = function() {
   };
   this.draw = function(display) {
      display.blit(bg);
   };
   var bg = gamejs.image.load('images/lose-screen.png');
   return this;
};
