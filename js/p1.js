import main, { debouncedResizeHandler } from './main.js';

window.onload = () => main('p1');
window.addEventListener('resize', debouncedResizeHandler);
