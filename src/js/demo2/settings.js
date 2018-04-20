export function generateSettings (canvas) {
  return {
    density: 50,
    particleSize: 10,
    startingX: canvas.offsetWidth / 2,
    startingY: canvas.offsetHeight / 2,
    gravity: 0.5,
    maxLife: 100,
    groundLevel: canvas.offsetHeight,
    leftWall: 0,
    rightWall: canvas.offsetWidth
  }
}