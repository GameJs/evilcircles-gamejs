exports.WIDTH = 1000;
exports.HEIGHT = 600;

exports.SQUARE_X_REDUCER = 2.0;
exports.SQUARE_Y_REDUCER = 1.0;

exports.MIN_DRAG_DISTANCE = 20;
exports.MAX_DRAG_DISTANCE = 300; // pixels

exports.MIN_SQUARE_SPEED = 10; // pixels per sec
exports.MAX_SQUARE_SPEED = 150; // pixels per sec

exports.levels = [
   {
      squares: [
         {pos: [200, 200], size: 2},
         {pos: [200, 400], size: 3}
      ],
      cores: [[950, 250]],
      walls: [[870, 210], [870, 230], [870, 250],
              [870, 270], [870, 290], [870, 310]],
      bgColor: '#00ff00'
   },
   {
      squares: [
         {pos: [200, 200], size: 2},
         {pos: [200, 400], size: 3}
      ],
      cores: [[950, 100], [950, 300]],
      walls: [[870, 210], [870, 230], [870, 250],
              [870, 270], [870, 290], [870, 310]],
      bgColor: '#00ff00'
   }
];
