exports.WIDTH = 1000;
exports.HEIGHT = 600;

exports.SQUARE_X_REDUCER = 2.0;
exports.SQUARE_Y_REDUCER = 1.0;

exports.MIN_DRAG_DISTANCE = 20;
exports.MAX_DRAG_DISTANCE = 300; // pixels

exports.MIN_SQUARE_SPEED = 10; // pixels per sec
exports.MAX_SQUARE_SPEED = 150; // pixels per sec

exports.INACTIVE_PORTION = 0.3;

exports.RASTER = 30;

exports.levels = [
   {
      squares: [
         {pos: [200, 200], size: 2},
      ],
      cores: [[950, 250]],
      walls: [],
      bgColor: '#00ff00'
   },

   {"squares":[{pos:[200,200], size: 2}],"cores":[[950,250]],"walls":[[900,180],[900,210],[900,240],[900,270],[900,300],[900,330],[900,360],[900,390],[900,150]],"bgColor":"#00ff00"},

{"squares":[{"pos":[235.44671479191223,242.30982296046423],"size":2}],"cores":[[950,250]],"walls":[[900,180],[900,210],[900,240],[900,270],[900,300],[900,330],[900,360],[900,390],[900,150],[720,60],[720,90],[720,120],[720,150],[720,180],[750,180],[780,180],[780,150],[780,120],[780,90],[780,60],[750,60],[750,90],[750,120],[750,150],[720,360],[750,360],[750,390],[750,420],[750,450],[750,480],[750,510],[750,540],[720,540],[720,510],[720,480],[720,450],[720,420],[720,390],[780,360],[780,390],[780,420],[780,450],[780,480],[780,510],[780,540],[810,120],[810,150],[810,180],[810,90],[810,60],[810,360],[810,390],[810,420],[810,450],[810,480],[810,510],[810,540],[840,180],[840,150],[840,120],[840,90],[840,60],[840,30],[810,30],[780,30],[750,30],[720,30],[720,0],[750,0],[780,0],[810,0],[840,0],[810,570],[780,570],[750,570],[720,570],[840,360],[870,360],[870,390],[870,420],[870,450],[870,480],[870,510],[870,540],[870,570],[840,570],[840,510],[840,390],[840,420],[840,450],[840,480],[870,150],[870,120],[870,90],[870,60],[870,30],[870,0],[900,0],[900,30],[900,60],[900,90],[900,120],[870,180],[900,420],[900,450],[900,480],[900,510],[900,540],[900,570]],"bgColor":"#00ff00"},

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
