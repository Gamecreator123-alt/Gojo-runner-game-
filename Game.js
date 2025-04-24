const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Load images
let gojo = new Image();
gojo.src = 'gojo.png';

let train = new Image();
train.src = 'train.png';

let coin = new Image();
coin.src = 'coin.png';

let cone = new Image();
cone.src = 'cone.png';

let scooty = new Image();
scooty.src = 'scooty.png';

let car = new Image();
car.src = 'car.png';

// When Gojo image loads, draw everything
gojo.onload = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw main character
  ctx.drawImage(gojo, 200, 600, 80, 100);

  // Obstacles and extras
  ctx.drawImage(train, 150, 400, 180, 80);
  ctx.drawImage(coin, 100, 300, 40, 40);
  ctx.drawImage(cone, 300, 500, 50, 50);
  ctx.drawImage(scooty, 100, 200, 100, 60);
  ctx.drawImage(car, 250, 100, 120, 60);

  // Title
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Gojo Runner Demo", 130, 50);
};
