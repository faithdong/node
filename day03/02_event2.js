/*
 * @Author: zhongxd 
 * @Date: 2019-01-22 19:31:03 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-22 19:33:21
 */


 const EventEmitter = require('events');

 class CustomEvent extends EventEmitter{

 }

 const ce = new CustomEvent();


 ce.on( 'error' , (err, time) => {
   console.log(err);
   console.log(time);
 });

 ce.emit('error',new Error('oops!'),Date.now());