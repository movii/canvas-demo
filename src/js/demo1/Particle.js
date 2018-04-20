import { generateRandomeYellowWhiteColor } from '../helper'

class Particle {
  constructor(canvas, r = 50) {
    this.canvas = canvas;
    // random postion
    this.x = this.canvas.offsetWidth * Math.random() * 5;
    this.y = this.canvas.offsetHeight * Math.random() * 5;

    // random size
    this.r = Math.random() * r;
    // velocity
    this.vx = (Math.random() * 2 - 1) * -1.5;
    this.vy = (Math.random() * 2 - 1) * 1.5;

    this.color = generateRandomeYellowWhiteColor();
  }

  draw(r) {
    const ctx = this.canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(this.x, this.y, r || this.r, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > this.canvas.width) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.vy = -this.vy;
    }
  }
}

export default Particle;
