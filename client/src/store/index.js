import { proxy } from 'valtio';
//defalut
const state = proxy({
    intro: true,
    color: '#134C19',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;