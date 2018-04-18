import Stats from 'stats.js';

const statsFPS = new Stats();
statsFPS.showPanel(0);
statsFPS.domElement.style.position = 'absolute';

export default statsFPS;