import { generateRandomeYellowWhiteColor } from '../helper'

let particleIndex = 0;

class Particle {
  constructor(canvas, settings, particles) {
    this.settings = settings;
    this.canvas = canvas;
    this.particles = particles;
    this.ctx = this.canvas.getContext('2d');

    this.x = this.settings.startingX;
    this.y = this.settings.startingY;

    this.vx = Math.random() * 20 - 10;
    this.vy = Math.random() * 20 - 5;

    particleIndex++;
    this.particles[particleIndex] = this;

    this.id = particleIndex;
    this.life = 0;
  }

  draw() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.y + this.settings.particleSize > this.settings.groundLevel) {
      this.vy *= -0.6;
      this.vx *= 0.75;
      this.y = this.settings.groundLevel - this.settings.particleSize;
    }

    if (this.x - this.settings.particleSize <= this.settings.leftWall) {
      this.vx *= -1;
      this.x = this.settings.leftWall + this.settings.particleSize;
    }

    if (this.x + this.settings.particleSize >= this.settings.rightWall) {
      this.vx *= -1;
      this.x = this.settings.rightWall - this.settings.particleSize;
    }

    this.vy += this.settings.gravity;
    this.vy += this.settings.gravity;
    this.life++;

    if (this.life >= this.settings.maxLife) {
      delete this.particles[this.id]
    }

    this.ctx.beginPath();
    this.ctx.fillStyle = generateRandomeYellowWhiteColor()
    this.ctx.arc(this.x, this.y, this.settings.particleSize, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fill();
  }
}

export default Particle;
