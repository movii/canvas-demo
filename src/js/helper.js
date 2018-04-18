export function $(selector) {
  return document.querySelector(selector);
}

export function generateRandomeYellowWhiteColor() {
  return `
    rgba(
        200, 
        200, 
        ${Math.floor(Math.random() * 255)}, 
        ${Math.random() - 0.1}
      )
    `;
}

export function resizeCanvas(canvas, callback) {
  canvas.style.width = '100%';
  canvas.style.height = '100%';

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  callback && callback()
}

