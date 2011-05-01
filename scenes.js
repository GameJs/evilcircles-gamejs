var gamejs = require('gamejs');
var $v = require('gamejs/utils/vectors');

var GOD_MODE = false;

// custom
var sprites = require('./sprites');
var Square = sprites.Square;
var Core = sprites.Core;
var Wall = sprites.Wall;
var Explosion = sprites.Explosion;
var config = require('./config');

var Level = exports.Level = function(director, levelIdx) {

   var self = this;
   var keyDown = {};
   var mouseDownLevelEdit = false;
   this.handleEvent = function(event) {
      if (event.type === gamejs.event.MOUSE_UP) {
         var direction = line && $v.substract(selectedSquare.rect.center, line[1]);
         var dragDistance =  direction && $v.len(direction) || 0;
         // accell square
         if (dragDistance > config.MIN_DRAG_DISTANCE) {
            sounds.shoot();
            selectedSquare.shoot(direction, dragDistance);
         // click on square
         } else if (!mouseDownLevelEdit) {
            var square = getCollidingSquare(event.pos);
            if (square && square.size > 1) {
               breakUp(square);
            }
         }
         line = null;
         selectedSquare = null;
         mouseDownLevelEdit = false;
      } else if (event.type === gamejs.event.MOUSE_DOWN) {
         selectedSquare = getCollidingSquare(event.pos);
         if (selectedSquare) {
            line = [
               event.pos,
               event.pos
            ];
         } else {
            line = null;
            if (keyDown[gamejs.event.K_SPACE]) {
               levelDump();
            } else {
               mouseDownLevelEdit = true;
               levelEditSet(event.pos);
            }
         }
         return;
      } else if (event.type === gamejs.event.MOUSE_MOTION) {
         if (line) {
            line[1] = event.pos;
         } else {
            levelEditSet(event.pos, true);
         }
         // NOTE is this too expensive per mouse motion?
         if (rightThirdOfScreen.collidePoint(event.pos)) {
            document.body.style.cursor = 'not-allowed';
         } else {
            document.body.style.cursor = 'auto';
         }
      } else if (event.type === gamejs.event.KEY_UP) {
         keyDown[event.key] = false;
      } else if (event.type === gamejs.event.KEY_DOWN) {
         keyDown[event.key] = true;
      }
      return;
   };

   function levelEditSet(pos, mouseMotion) {
      var rpos = [pos[0] - (pos[0] % config.RASTER), pos[1] - (pos[1] % config.RASTER)];
      var doesCollide = walls.collidePoint(rpos).length ||
               cores.collidePoint(rpos).length ||
               squares.collidePoint(rpos).length;
      if (doesCollide) {
         if (keyDown[gamejs.event.K_d]) {
            walls.collidePoint(rpos).forEach(function(i) {
               i.kill();
            });
            cores.collidePoint(rpos).forEach(function(i) {
               i.kill();
            });
            squares.collidePoint(rpos).forEach(function(i) {
               i.kill();
            });

         }
      } else {
         if (keyDown[gamejs.event.K_w]) {
            walls.add(new Wall(rpos));
         } else if (!mouseMotion && keyDown[gamejs.event.K_c]) {
            cores.add(new Core(rpos));
         } else if (!mouseMotion && keyDown[gamejs.event.K_1]) {
            squares.add(new Square({pos: rpos, size: 1}));
         } else if (!mouseMotion && keyDown[gamejs.event.K_2]) {
            squares.add(new Square({pos: rpos, size: 2}));
         } else if (!mouseMotion && keyDown[gamejs.event.K_3]) {
            squares.add(new Square({pos: rpos, size: 3}));
         }
      }
      return;
   };
   function levelDump() {
      console.log(JSON.stringify({
         squares: squares.sprites().map(function(s) {
            return {pos: [s.rect.left, s.rect.top], size: s.size};
         }),
         cores: cores.sprites().map(function(s) {
            return [s.rect.left, s.rect.top];
         }),
         walls: walls.sprites().map(function(s) {
            return [s.rect.left, s.rect.top];
         }),
         bgColor: '#00ff00'
      }));
   }

   function getCollidingSquare(pos) {
      var clickedSquares = squares.collidePoint(pos);
      if (clickedSquares.length) {
         var square = clickedSquares[0];
         var cpos = [square.rect.right, square.rect.top]
         if (!rightThirdOfScreen.collidePoint(cpos)) {
            dragDistance = 0;
            return square;
         }
      }
      return null;
   };

   this.update = function(msDuration) {
      squares.update(msDuration);
      explosions.update(msDuration);
      // collisions: square, cores
      gamejs.sprite.groupCollide(squares, cores, false, true).forEach(function(collision) {
         sounds.epicExplode();
         explosions.add(new Explosion(collision.a.rect.center));
         explosions.add(new Explosion(collision.b.rect.center));
      });
      // collisions: squares, walls
      gamejs.sprite.groupCollide(squares, walls, true, true).forEach(function(collision) {
         sounds.explode();
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
      if (levelFinished === null && !GOD_MODE) {
         if (squares.sprites().length <= 0) {
            levelFinished = setTimeout(function() {
               sounds.gameOver();
               director.replaceScene(new GameOverScreen(director, levelIdx));
            }, 2000);
            return;
         }
         // NEXT LEVEL if all circles destroyed
         if (cores.sprites().length <= 0) {
            levelFinished = setTimeout(function() {
               var nextLevelIdx = levelIdx + 1;
               if (nextLevelIdx >= config.levels.length) {
                  director.replaceScene(new WinScreen(director));
               } else {
                  director.replaceScene(new NextLevelScreen(director, nextLevelIdx));
               }
            }, 2000);
            return;
         }
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
      gamejs.draw.rect(display, 'rgba(100,100,100,0.3)', rightThirdOfScreen, 0);
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
      sounds.breakUp();
      return;
   };

   function fillLevel(levelConfig) {
      levelConfig.squares.forEach(function(s) {
         squares.add(new Square(s));
      });
      levelConfig.walls.forEach(function(w) {
         walls.add(new Wall(w));
      });
      levelConfig.cores.forEach(function(c) {
         cores.add(new Core(c));
      });
      return;
   };

   /**
    * constructor
    */
   // display
   var corners = gamejs.image.load('images/corners.png');
   var rightThirdOfScreen = new gamejs.Rect(
         [config.WIDTH * (1 - config.INACTIVE_PORTION), 0],
         [config.WIDTH * config.INACTIVE_PORTION, config.HEIGHT]
      );
   // interaction
   var line = null;
   var selectedSquare = null;

   var levelIdx = levelIdx || 0;
   var levelConfig = config.levels[levelIdx];

   // objects
   var squares = new gamejs.sprite.Group();
   var walls = new gamejs.sprite.Group();
   var cores = new gamejs.sprite.Group();
   var explosions = new gamejs.sprite.Group();
   fillLevel(levelConfig)

   var levelFinished = null;

   var sounds = {
      'explode': function() {
         (new gamejs.mixer.Sound('sounds/34201__themfish__glass_house1.ogg')).play();
      },
      'epicExplode': function() {
         (new gamejs.mixer.Sound('sounds/34202__themfish__glass_house2.ogg')).play();
      },
      'shoot': function() {
         (new gamejs.mixer.Sound('sounds/impactcrunch05.ogg')).play();
      },
      'gameOver': function() {
         (new gamejs.mixer.Sound('sounds/game_over.ogg')).play();
      },
      'breakUp': function() {
         var idx = parseInt(1 + Math.random() * 3, 10);
         (new gamejs.mixer.Sound('sounds/impactcrunch0' + idx + '.ogg')).play();
      }
   };

   return this;
};

exports.StartScreen = function(director) {

   function startGame() {
      (new gamejs.mixer.Sound('sounds/30306__ERH__tension.ogg')).play();

      var hashParts = document.location.hash.substring(1).split(',');
      var firstLevel = parseInt(hashParts[0], 10);
      GOD_MODE = hashParts[1] === 'god';
      director.replaceScene(new Level(director, firstLevel));
   };

   this.handleEvent = function(event) {
      if (event.type === gamejs.event.MOUSE_UP) {
         startGame();
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
         director.replaceScene(new Level(director, 0));
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

var GameOverScreen = function(director, levelIdx) {
   this.handleEvent = function(event) {
      if (event.type === gamejs.event.MOUSE_UP) {
         director.replaceScene(new Level(director, levelIdx));
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

var NextLevelScreen = function(director, levelIdx) {
   this.handleEvent = function(event) {
      if (event.type === gamejs.event.MOUSE_DOWN) {
         director.replaceScene(new Level(director, levelIdx));
         document.location.hash = "#" + levelIdx;
      };
   };

   this.update = function() {
   };

   this.draw = function(display) {
      display.blit(bg);
   };
   var bg = gamejs.image.load('images/next-screen.png');
   document.body.style.cursor = 'auto';
   return this;
};
