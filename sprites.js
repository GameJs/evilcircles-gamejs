var gamejs = require('gamejs');
var $v = require('gamejs/utils/vectors');
//custom
var config = require('./config');

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
 * options: {pos, [size], [direction]}
 */
var Square = exports.Square = function(options) {
   Square.superConstructor.apply(this, arguments);

   this.size = options.size || 3;
   this.image = gamejs.image.load('images/' + this.size + 'x.png');
   this.rect = new gamejs.Rect(options.pos, [this.image.rect.width, this.image.rect.height]);
   this.direction = $v.unit([
                     Math.random() - 0.5 / config.SQUARE_X_REDUCER,
                     Math.random() - 0.5 / config.SQUARE_Y_REDUCER
                    ]);
   if (options.startDirection instanceof Array) {
      this.direction = $v.add(
         $v.multiply(this.direction, 0.2),
         $v.multiply(options.direction, 0.8)
      );
   }
   return this;
};
gamejs.utils.objects.extend(Square, gamejs.sprite.Sprite);

Square.prototype.update = function(msDuration) {
   var delta = $v.multiply(this.direction, config.SQUARE_SPEED);
   delta = $v.multiply(delta, (msDuration/1000));
   this.rect.moveIp(delta);
   return;
};
