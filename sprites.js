var gamejs = require('gamejs');
var $v = require('gamejs/utils/vectors');
//custom
var config = require('./config');
var SpriteSheet = require('./animations').SpriteSheet;
var AnimationSheet = require('./animations').AnimationSheet;
/**
 *
 */
var Core = exports.Core = function(pos) {
   Core.superConstructor.apply(this, arguments);

   this.image = gamejs.image.load('images/core.png');
   this.rect = new gamejs.Rect(pos, [this.image.rect.width, this.image.rect.height]);
   return this;
};
gamejs.utils.objects.extend(Core, gamejs.sprite.Sprite);

/**
 * options: {pos, [size], [direction], [speed]}
 */
var Square = exports.Square = function(options) {
   Square.superConstructor.apply(this, arguments);

   this.speed = options.speed || config.MIN_SQUARE_SPEED;
   this.size = options.size || 3;
   this.image = gamejs.image.load('images/' + this.size + 'x.png');
   this.rect = new gamejs.Rect(options.pos, [this.image.rect.width, this.image.rect.height]);
   this.direction = $v.unit([
                     Math.random() - 0.5 / config.SQUARE_X_REDUCER,
                     Math.random() - 0.5 / config.SQUARE_Y_REDUCER
                    ]);
   if (options.direction instanceof Array) {
      this.direction = $v.add(
         $v.multiply(this.direction, 0.2),
         $v.multiply(options.direction, 0.8)
      );
   }
   return this;
};
gamejs.utils.objects.extend(Square, gamejs.sprite.Sprite);

Square.prototype.update = function(msDuration) {
   var delta = $v.multiply(this.direction, this.speed);
   delta = $v.multiply(delta, (msDuration/1000));
   this.rect.moveIp(delta);
   return;
};

Square.prototype.shoot = function(direction, dragDistance) {
   this.direction = $v.unit(direction);
   this.speed = (Math.min(dragDistance - config.MIN_DRAG_DISTANCE, config.MAX_DRAG_DISTANCE)
         / config.MAX_DRAG_DISTANCE
      ) * config.MAX_SQUARE_SPEED;
   this.speed = Math.max(config.MIN_SQUARE_SPEED, this.speed);
   return;
};

/**
 *
 */
var Explosion = exports.Explosion = function(center) {
   Explosion.superConstructor.apply(this, arguments);
   // FIXME spritesheet can be cached, no need for per instance!
   var spriteSheet = new SpriteSheet('images/boom.png', {width: 100, height: 100});
   this.animationSheet = new AnimationSheet(spriteSheet, {'boom': [0,8]});
   this.animationSheet.start('boom');
   var size = this.animationSheet.getSize();
   this.rect = new gamejs.Rect(center, size);
   this.rect.moveIp(-size[0]/2, -size[1]/2);
   return this;
};
gamejs.utils.objects.extend(Explosion, gamejs.sprite.Sprite);

Explosion.prototype.update = function(msDuration) {
   this.animationSheet.update(msDuration);
   if (this.animationSheet.loopFinished) {
      this.kill();
      return;
   }

};

Explosion.prototype.draw = function(display) {
   display.blit(this.animationSheet.image, this.rect);
   return;
};

exports.Wall = function(pos) {
   var s = new gamejs.sprite.Sprite();
   s.image = gamejs.image.load('images/wall.png');
   s.rect = new gamejs.Rect(pos, [s.image.rect.width, s.image.rect.height]);
   return s;
};
