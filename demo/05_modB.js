/*
 * @Author: zhongxd 
 * @Date: 2019-01-17 15:25:46 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-17 15:29:10
 */


module.exports.test = 'B';

const modB = require('./05_modA');

console.log('modB：' + modB.test);

module.exports.test = 'BB';
 