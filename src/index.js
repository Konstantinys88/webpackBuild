import '@babel/polyfill';
import './index.html';
import './index.scss';
import code from './img/code.png';
import { mult, sum } from './modules/calc';

const img = new Image();
img.src = code;

console.log(mult(3,4));
console.log(sum(3,4));
