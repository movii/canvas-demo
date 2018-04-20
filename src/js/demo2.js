import dat from 'dat.gui';
import { generateSettings } from './demo2/settings'
import { $, resizeCanvas } from './helper'
import Particle from './demo2/Particle'
import statsFPS from './statsFps';

const $canvas = $('.canvas')
const ctx = $canvas.getContext('2d')
// add dat.gui
const gui = new dat.GUI({ autoPlace: false });
const settings = generateSettings($canvas)

let particles = []

gui.domElement.style.cssText = `
  position: absolute;
  right: 0;
  top: 0
`;

function resizeCanvasCallback () {
  settings.startingX = $canvas.offsetWidth / 2
  settings.startingY = $canvas.offsetHeight / 2
  settings.groundLevel = $canvas.offsetHeight
  settings.rightWall = $canvas.offsetWidth
}

function loop () {
  statsFPS.begin();

  ctx.clearRect(0, 0, $canvas.width, $canvas.height)

  let len = Math.floor(settings.density)

  Array.from(Array(len)).map(() => {
    if (Math.random() > .9 )  new Particle($canvas, settings, particles);
  });

  particles.forEach(particle => particle.draw());

  statsFPS.end();

  requestAnimationFrame(loop);
}

document.addEventListener('DOMContentLoaded', () => {
  resizeCanvas($canvas, resizeCanvasCallback)

  gui.add(settings, 'density', 1, 100);
  gui.add(settings, 'particleSize', 1, 50);
  gui.add(settings, 'gravity', -2, 2);
  gui.add(settings, 'startingY', 0, $canvas.offsetHeight * 0.75);
  gui.add(settings, 'groundLevel', $canvas.offsetHeight * .1, $canvas.offsetHeight);
  gui.add(settings, 'leftWall', 0, $canvas.offsetWidth * .9);
  gui.add(settings, 'rightWall', $canvas.offsetWidth * .1, $canvas.offsetWidth);

  window.addEventListener('resize', () => {
    resizeCanvas($canvas, resizeCanvasCallback);
  },{ capture: false });

  requestAnimationFrame(loop);

  $('main').appendChild(gui.domElement);

  // add FPS counter
  $('main').appendChild(statsFPS.dom);
}, { capture: false })

