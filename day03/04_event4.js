/*
 * @Author: zhongxd 
 * @Date: 2019-01-22 19:43:29 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-22 19:51:58
 */


 const EventEmitter = require('events');

 class CustomEvent extends EventEmitter{

 }

 function fn1(){
  console.log('fn1');
}

 function fn2(){
   console.log('fn2');
 }


 const ce = new CustomEvent();
 

 ce.on('test',fn1);
 ce.on('test',fn2);
 

 setInterval( ()=>{
   ce.emit('test');
 },500);


 setTimeout( ()=>{
  //ce.removeListener('test',fn1);
  //ce.removeListener('test',fn2);
  ce.removeAllListeners('test');//移除所有
 },1500);