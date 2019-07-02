// ES6 module
import sum from './sum'
// Commonjs module
let miuns = require('./minus');
//AMD module --- 异步加载模块
require(['./muti'], function (muti) {
  console.log('muti(23, 24) = ', muti(23, 24));
});
console.log('sum(23, 24) = ', sum(23, 24));
console.log('miuns(23, 24) = ', miuns(23, 24));