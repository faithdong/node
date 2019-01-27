/*
 * @Author: zhongxd 
 * @Date: 2019-01-26 11:36:43 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-27 11:49:10
 * 
 * Node  fs文件系统
 * 读文件API
 */


 const fs = require('fs');

 //异步操作
 fs.readFile('./01_fs1.js','utf8', (err,data) => {
  if (err) throw err;
   console.log(data);
 })
 
//同步操作
const syncData = fs.readFileSync('./01_fs1.js','utf8');
console.log(syncData);