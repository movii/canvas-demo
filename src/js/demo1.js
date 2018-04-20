import { $, resizeCanvas } from './helper';
import Particle from './demo1/Particle';
import statsFPS from './statsFps';
import settings from './demo1/settings';
import gui from './demo1/gui';

const $canvas = $('.canvas');
const $ctx = $canvas.getContext('2d');

let particles = [];

function loop() {
  statsFPS.begin();
  $ctx.clearRect(0, 0, $canvas.width, $canvas.height);

  particles.forEach(particle => {
    particle.move();
    particle.draw(settings.radius);
  });

  statsFPS.end();
  requestAnimationFrame(loop);
}

document.addEventListener('DOMContentLoaded', () => {
  particles = Array.from(Array(settings.density)).map(() => {
    return new Particle($canvas, settings.radius);
  });

  window.addEventListener('resize', () => {
    resizeCanvas($canvas);
    return window;
  });

  resizeCanvas($canvas);

  requestAnimationFrame(loop);

  $('main').appendChild(gui.domElement);

  // add FPS counter
  $('main').appendChild(statsFPS.dom);
}, { capture: false });
