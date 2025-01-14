import main, { debouncedResizeHandler } from './main.js';

window.onload = () => main('p2');
window.addEventListener('resize', debouncedResizeHandler);
