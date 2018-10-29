console.log('App working: open app/index_math.js to start exploring ES6');

// import { add, subtract, multiply, divide } from './math';
import * as math from './math';

import { addToDom } from "./helpers";

console.log('Math: ', math);

// addToDom('h1', `23 + 67 = ${add(23, 67)}`);
//
// addToDom('h1', `56 - 14 = ${subtract(56, 14)}`);
//
// addToDom('h1', `10 x 5 = ${multiply(10, 5)}`);
//
// addToDom('h1', `75 / 3 = ${divide(75, 3)}`);

addToDom('h1', `23 + 67 = ${math.add(23, 67)}`);

addToDom('h1', `56 - 14 = ${math.subtract(56, 14)}`);

addToDom('h1', `10 x 5 = ${math.multiply(10, 5)}`);

addToDom('h1', `75 / 3 = ${math.divide(75, 3)}`);



