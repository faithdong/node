/*
 * @Author: zhongxd 
 * @Date: 2019-01-17 15:27:42 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-17 15:28:48
 */


module.exports.test = 'A';

const modB = require('./05_modB');

console.log('modA：' + modB.test);

module.exports.test = 'AA';