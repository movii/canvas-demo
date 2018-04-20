import Stats from 'stats.js';

const statsFPS = new Stats();
statsFPS.showPanel(0);
statsFPS.domElement.style.cssText = `
  position: absolute;
  top: 0;
  left: 0;
`;

export default statsFPS;