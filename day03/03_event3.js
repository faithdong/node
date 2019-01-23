/*
 * @Author: zhongxd 
 * @Date: 2019-01-22 19:34:05 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-22 19:37:54
 */


const EventEmitter = require('events');

class CustomEvent extends EventEmitter {

}

const ce = new CustomEvent();


/**
 * once() API只执行一次
 */
ce.once('test',()=>{
  console.log('test event');
});


setInterval( ()=>{
  ce.emit('test'); //只执行 一次
  console.log('setInterval'); //每隔 1s 都要执行
},1000);