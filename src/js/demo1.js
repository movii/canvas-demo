import dat from 'dat.gui';
import { $, resizeCanvas } from './helper';
import Particle from './particle';
import statsFPS from './statsFps';

const $canvas = $('.canvas');
const $ctx = $canvas.getContext('2d');

// add dat.gui
const gui = new dat.GUI();

let particles = [];
let settings = {
  density: 500,
  radius: 20
};

gui.add(settings, 'radius', 5, 60).listen();

// add FPS counter
$('main').appendChild(statsFPS.dom);

function generateParticles(number) {
  for (let i = 0; i < number; i++) {
    let p = new Particle($canvas, settings.radius);
    particles.push(p);
  }
}

function loop() {
  statsFPS.begin();
  $ctx.clearRect(0, 0, $canvas.width, $canvas.height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].draw(settings.radius);
  }
  statsFPS.end();
  requestAnimationFrame(loop);
}

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('resize', () => {
    resizeCanvas($canvas);
    return window;
  });

  generateParticles(settings.density);

  resizeCanvas($canvas);
  requestAnimationFrame(loop);
});

