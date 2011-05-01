exports.WIDTH = 1000;
exports.HEIGHT = 600;

exports.SQUARE_X_REDUCER = 2.0;
exports.SQUARE_Y_REDUCER = 1.0;

exports.MIN_DRAG_DISTANCE = 50;
exports.MAX_DRAG_DISTANCE = 300; // pixels

exports.MIN_SQUARE_SPEED = 10; // pixels per sec
exports.MAX_SQUARE_SPEED = 200; // pixels per sec

exports.INACTIVE_PORTION = 0.3;

exports.RASTER = 30;

exports.levels = [
   // 0
{"squares":[{"pos":[344.14935161096463,250.37555860180493],"size":2}],"cores":[[840,270]],"walls":[],"bgColor":"#00ff00"},

   // 1
{"squares":[{pos:[200,200], size: 2}],"cores":[[950,250]],"walls":[[900,180],[900,210],[900,240],[900,270],[900,300],[900,330],[900,360],[900,390],[900,150]],"bgColor":"#00ff00"},

   // 2
{"squares":[{"pos":[235.44671479191223,242.30982296046423],"size":2}],"cores":[[950,250]],"walls":[[900,180],[900,210],[900,330],[900,360],[900,390],[900,150],[720,60],[720,90],[720,120],[720,150],[720,180],[750,180],[780,180],[780,150],[780,120],[780,90],[780,60],[750,60],[750,90],[750,120],[720,360],[750,360],[750,420],[750,450],[750,480],[750,510],[750,540],[720,540],[720,510],[720,480],[720,450],[720,420],[720,390],[780,360],[780,390],[780,420],[780,450],[780,480],[780,510],[780,540],[810,120],[810,180],[810,90],[810,60],[810,360],[810,420],[810,450],[810,480],[810,510],[810,540],[840,180],[840,150],[840,120],[840,90],[840,60],[840,30],[810,30],[780,30],[750,30],[720,30],[720,0],[750,0],[780,0],[810,0],[840,0],[810,570],[780,570],[750,570],[720,570],[840,360],[870,360],[870,390],[870,420],[870,450],[870,480],[870,510],[870,540],[870,570],[840,570],[840,510],[840,390],[840,420],[840,450],[840,480],[870,150],[870,120],[870,90],[870,60],[870,30],[870,0],[900,0],[900,30],[900,60],[900,90],[900,120],[870,180],[900,420],[900,450],[900,480],[900,510],[900,540],[900,570],[840,210],[780,210],[720,210],[720,240],[750,240],[840,330],[780,330],[720,330],[720,300],[750,300],[840,540],[840,240],[840,270],[840,300]],"bgColor":"#00ff00"},

   // 3
{"squares":[{"pos":[309.0237233773002,245.23251596609683],"size":3}],"cores":[[870,60],[870,480]],"walls":[[900,210],[900,240],[900,270],[900,300],[900,330],[720,60],[720,90],[720,120],[720,150],[780,90],[780,60],[750,60],[750,90],[750,120],[720,360],[750,390],[750,420],[750,450],[750,480],[750,510],[750,540],[720,540],[720,510],[720,480],[720,450],[720,420],[720,390],[780,450],[780,480],[780,510],[780,540],[810,60],[810,480],[810,510],[810,540],[810,30],[780,30],[750,30],[720,30],[720,0],[750,0],[780,0],[810,0],[810,570],[780,570],[750,570],[720,570],[900,360],[810,90],[810,120],[810,150],[810,180],[840,180],[870,180],[900,180],[870,360],[840,360],[810,360],[810,390],[810,420],[810,450],[720,180],[720,330]],"bgColor":"#00ff00"},

   // 4
{"squares":[{"pos":[406.7603478850398,255.071038319223],"size":3}],"cores":[[870,60],[60,540],[60,30]],"walls":[[900,210],[900,240],[900,270],[900,300],[900,330],[720,60],[720,90],[720,120],[720,150],[780,90],[780,60],[750,60],[750,90],[750,120],[720,360],[750,390],[750,420],[750,450],[750,480],[750,510],[750,540],[720,540],[720,510],[720,480],[720,450],[720,420],[720,390],[780,450],[780,480],[780,510],[780,540],[810,60],[810,480],[810,510],[810,540],[810,30],[780,30],[750,30],[720,30],[720,0],[750,0],[780,0],[810,0],[810,570],[780,570],[750,570],[720,570],[900,360],[810,90],[810,120],[810,150],[810,180],[840,180],[870,180],[900,180],[870,360],[840,360],[810,360],[810,390],[810,420],[810,450],[720,330],[0,120],[30,120],[60,120],[90,120],[120,120],[120,90],[120,60],[120,30],[120,0],[150,0],[180,0],[210,0],[240,0],[210,30],[240,30],[240,60],[210,60],[210,90],[210,120],[180,120],[150,120],[150,90],[150,60],[150,30],[180,30],[180,60],[180,90],[240,90],[240,120],[0,480],[30,480],[60,480],[90,480],[120,480],[150,480],[180,480],[210,480],[240,480],[240,510],[210,510],[210,540],[210,570],[240,570],[240,540],[180,510],[180,540],[180,570],[150,570],[150,540],[150,510],[120,510],[120,540],[120,570],[270,120],[270,90],[270,60],[270,30],[270,0],[720,180],[120,150],[120,450],[300,120],[270,150],[240,450],[270,480],[270,570],[300,0],[180,150],[180,450]],"bgColor":"#00ff00"},

// 5
{squares:[{pos:[73.73485588625132, 272.41972014416126], size:2}], cores:[[840, 270]], walls:[[150, 90], [180, 90], [210, 90], [240, 90], [270, 90], [300, 90], [300, 120], [330, 120], [360, 120], [390, 120], [420, 120], [450, 120], [480, 120], [510, 120], [510, 90], [540, 90], [480, 90], [450, 90], [420, 90], [390, 90], [360, 90], [330, 90], [150, 120], [180, 120], [210, 120], [240, 120], [270, 120], [540, 120], [570, 120], [600, 120], [630, 120], [660, 120], [690, 120], [690, 90], [660, 90], [630, 90], [600, 90], [570, 90], [300, 60], [270, 60], [240, 60], [210, 60], [180, 60], [150, 60], [330, 60], [360, 60], [390, 60], [420, 60], [450, 60], [480, 60], [510, 60], [540, 60], [570, 60], [600, 60], [630, 60], [660, 60], [690, 60], [720, 60], [750, 60], [780, 60], [810, 60], [840, 60], [870, 60], [900, 60], [930, 60], [960, 60], [960, 90], [960, 120], [930, 120], [900, 120], [870, 120], [840, 120], [810, 120], [780, 120], [750, 120], [720, 120], [750, 90], [780, 90], [810, 90], [840, 90], [870, 90], [900, 90], [930, 90], [720, 90], [930, 150], [900, 150], [870, 150], [870, 180], [840, 180], [810, 180], [780, 150], [750, 150], [720, 150], [690, 150], [660, 150], [630, 150], [600, 150], [570, 150], [540, 150], [510, 150], [480, 150], [450, 150], [420, 150], [390, 150], [360, 150], [330, 150], [300, 150], [270, 150], [240, 150], [210, 150], [180, 150], [210, 180], [240, 180], [270, 180], [300, 180], [330, 180], [360, 180], [390, 180], [420, 180], [450, 180], [480, 180], [510, 180], [540, 180], [570, 180], [600, 180], [630, 180], [660, 180], [690, 180], [720, 180], [750, 180], [780, 180], [900, 180], [930, 180], [960, 180], [960, 150], [840, 150], [810, 150], [180, 180], [150, 180], [150, 150], [120, 150], [90, 150], [90, 180], [120, 180], [120, 120], [90, 120], [120, 90], [120, 60], [90, 60], [90, 90], [90, 30], [120, 30], [150, 30], [180, 30], [210, 30], [240, 30], [270, 30], [300, 30], [330, 30], [360, 30], [390, 30], [420, 30], [450, 30], [480, 30], [510, 30], [540, 30], [570, 30], [630, 30], [660, 30], [690, 30], [720, 30], [750, 30], [780, 30], [810, 30], [840, 30], [870, 30], [900, 30], [930, 30], [960, 30], [600, 30], [60, 450], [90, 450], [120, 450], [150, 450], [180, 450], [240, 450], [270, 450], [300, 450], [330, 450], [360, 450], [390, 450], [420, 450], [420, 420], [450, 420], [480, 420], [510, 420], [540, 420], [570, 420], [600, 420], [630, 420], [660, 420], [690, 420], [720, 420], [750, 420], [780, 420], [810, 420], [840, 420], [870, 420], [900, 420], [930, 420], [930, 450], [960, 450], [960, 480], [960, 510], [960, 540], [960, 570], [930, 570], [900, 570], [870, 570], [840, 570], [810, 570], [780, 570], [750, 570], [690, 570], [660, 570], [630, 570], [600, 570], [570, 570], [540, 570], [510, 570], [480, 570], [450, 570], [420, 570], [420, 600], [390, 600], [360, 600], [360, 570], [330, 570], [300, 570], [300, 600], [270, 600], [240, 600], [240, 570], [210, 570], [180, 570], [150, 570], [120, 570], [90, 570], [60, 570], [30, 570], [30, 540], [60, 540], [60, 510], [60, 480], [30, 480], [30, 510], [90, 540], [120, 510], [120, 540], [150, 540], [180, 540], [210, 540], [240, 540], [270, 540], [300, 540], [330, 540], [360, 540], [180, 510], [150, 510], [120, 480], [90, 480], [90, 510], [150, 480], [180, 480], [210, 480], [210, 510], [240, 510], [270, 510], [300, 510], [330, 510], [360, 510], [390, 510], [390, 540], [270, 570], [240, 480], [270, 480], [300, 480], [330, 480], [360, 480], [390, 480], [390, 570], [420, 540], [420, 510], [420, 480], [450, 540], [480, 540], [510, 540], [540, 540], [600, 540], [630, 540], [660, 540], [690, 540], [720, 540], [750, 540], [780, 540], [810, 540], [840, 540], [870, 540], [720, 570], [570, 540], [450, 450], [480, 450], [510, 450], [540, 450], [570, 450], [600, 450], [630, 450], [660, 450], [690, 450], [720, 450], [750, 450], [780, 450], [810, 450], [840, 450], [870, 450], [840, 480], [810, 480], [780, 480], [750, 480], [720, 480], [660, 480], [630, 480], [570, 480], [540, 510], [510, 510], [480, 510], [570, 510], [600, 510], [630, 510], [660, 510], [690, 510], [480, 480], [450, 480], [450, 510], [510, 480], [540, 480], [600, 480], [690, 480], [720, 510], [750, 510], [780, 510], [810, 510], [840, 510], [870, 510], [900, 510], [900, 540], [930, 540], [930, 510], [870, 480], [900, 480], [930, 480], [900, 450], [960, 420], [390, 420], [360, 420], [330, 420], [300, 420], [270, 420], [240, 420], [210, 420], [180, 420], [210, 450], [150, 420], [120, 420], [90, 420], [60, 420], [30, 420], [30, 450], [0, 450], [0, 420], [0, 480], [0, 510], [0, 540], [0, 570], [0, 180], [30, 180], [30, 150], [0, 150], [0, 120], [0, 90], [0, 60], [0, 30], [30, 30], [30, 60], [30, 90], [30, 120], [60, 30], [60, 60], [60, 90], [60, 120], [60, 150], [60, 180], [150, 330], [180, 330], [210, 330], [240, 330], [270, 330], [360, 330], [390, 330], [420, 330], [510, 330], [540, 330], [630, 330], [150, 240], [180, 240], [210, 240], [240, 240], [270, 240], [360, 240], [390, 240], [420, 240], [510, 240], [540, 240], [630, 240]], bgColor:"#00ff00"},

// 6
{squares:[{pos:[203.87393449670463, 274.1980493773188], size:3}, {pos:[154.38155975147146, 202.92479310629284], size:2}, {pos:[69.15669299791102, 483.0796187627338], size:2}], cores:[[840, 270], [600, 510], [600, 60], [480, 270]], walls:[[690, 0], [690, 30], [690, 60], [690, 120], [690, 150], [690, 180], [690, 210], [690, 240], [690, 270], [690, 300], [690, 330], [690, 360], [690, 390], [690, 420], [690, 450], [690, 480], [690, 510], [690, 540], [690, 570], [690, 600], [780, 570], [780, 540], [780, 510], [780, 480], [780, 450], [780, 420], [780, 390], [780, 360], [780, 330], [780, 300], [780, 60], [780, 30], [780, 0], [780, 90], [780, 120], [780, 150], [780, 180], [780, 210], [780, 240], [780, 270], [690, 90], [570, 0], [570, 30], [570, 60], [570, 90], [570, 120], [570, 150], [570, 180], [570, 210], [570, 240], [570, 270], [570, 300], [570, 330], [570, 360], [570, 390], [570, 420], [570, 450], [570, 480], [570, 510], [570, 540], [570, 570], [420, 0], [420, 30], [420, 60], [420, 90], [420, 120], [420, 150], [420, 180], [390, 600], [420, 600], [420, 570], [420, 540], [420, 510], [420, 480], [420, 450], [420, 420], [420, 390], [420, 360], [420, 330], [420, 300], [420, 270], [420, 240], [420, 210], [390, 30], [390, 60], [390, 90], [390, 330], [390, 360], [390, 390], [390, 420], [390, 450], [540, 360], [510, 360], [540, 390], [540, 420], [540, 150], [540, 120], [540, 180], [660, 240], [660, 270], [720, 420], [720, 450], [720, 480], [750, 480], [750, 510], [750, 90], [750, 60], [750, 30]], bgColor:"#00ff00"},

// 7
{"squares":[{"pos":[115.017345893566,-1.5021031902529178],"size":3},{"pos":[22.68108437568863,407.1463098848319],"size":3}],"cores":[[840,270],[840,30],[720,480],[930,540]],"walls":[[60,240],[90,240],[120,240],[150,240],[180,240],[210,240],[240,240],[270,240],[300,240],[330,240],[360,240],[390,240],[420,270],[390,270],[390,300],[360,300],[330,300],[300,300],[270,300],[240,300],[210,300],[180,300],[150,300],[120,300],[90,300],[60,270],[30,270],[0,270],[0,300],[30,300],[60,300],[90,270],[120,270],[150,270],[180,270],[210,270],[240,270],[270,270],[0,240],[330,270],[360,270],[270,330],[240,330],[210,330],[180,330],[150,330],[120,330],[90,330],[60,330],[30,330],[0,330],[300,270],[420,120],[450,120],[480,120],[510,120],[540,120],[570,120],[600,120],[630,120],[660,120],[690,120],[720,120],[750,120],[780,120],[810,120],[810,150],[840,150],[870,150],[900,150],[930,150],[960,150],[990,150],[1020,150],[780,300],[750,300],[720,300],[690,300],[660,300],[630,300],[600,300],[570,300],[540,300],[510,300],[390,450],[420,450],[450,450],[480,450],[510,450],[540,450],[570,450],[600,450],[630,450],[660,450],[690,420],[720,420],[750,420],[780,420],[810,390],[600,540],[630,540],[660,540],[690,540],[720,540],[750,570],[780,570],[810,570],[810,600],[840,600],[690,30],[660,30],[630,30],[600,30],[570,30],[540,30],[540,0],[510,0],[480,0],[450,0],[330,150],[360,150],[360,180],[390,180],[390,210],[630,210],[660,210],[690,210],[900,420],[900,450],[900,480],[870,480],[840,480],[810,480],[810,510],[360,540],[360,510],[330,510],[330,540],[300,510],[270,510],[240,480],[300,60],[300,30]],"bgColor":"#00ff00"},

];
