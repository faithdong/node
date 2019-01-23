/*
 * @Author: zhongxd 
 * @Date: 2019-01-22 19:22:18 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-22 19:29:34
 * 
 * Node 基础API Event模块
 */

 const EventEmitter = require('events');

 /**
  * 定义CustomEvent类，并继承 Node events 模块
  */
 class CustomEvent extends EventEmitter{


 }

 //创建一个事件实例
 const ce = new CustomEvent();
 
 //binding 绑定 test 事件
 ce.on('test',()=>{
   console.log('this is a test!');
 });

 setInterval( () => {
   ce.emit('test'); //触发 test 事件
 },1000);
