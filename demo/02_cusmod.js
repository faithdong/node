/*
 * @Author: zhongxd 
 * @Date: 2019-01-17 15:15:27 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-17 15:20:11
 * 
 * require 特性
 */


 console.log('this is a module');

 const testVar = 100;

 function testFn (){
   console.log(testVar);
 }

 module.exports.testVar = testVar;
 module.exports.testFn = testFn;
 

