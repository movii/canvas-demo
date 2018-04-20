import dat from 'dat.gui';
import settings from './settings';

// add dat.gui
const gui = new dat.GUI({ autoPlace: false });

gui.add(settings, 'radius', 5, 60);

gui.domElement.style.cssText = `
  position: absolute;
  right: 0;
  top: 0
`;

export default gui;
