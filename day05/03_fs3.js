/*
 * @Author: zhongxd 
 * @Date: 2019-01-27 12:00:32 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-27 12:22:24
 * 
 * stat
 * reame()
 * unLink()
 * 
 */


 const fs = require('fs');
 fs.stat('./03_fs3.js',(err,stats)=>{
   if(err) {
     console.log('文件不存在');
     return;
   }
   console.log(stats.isFile());
   console.log(stats.isDirectory());
   console.log(stats);
 })

 /**
  * 重命名文件
  */
 fs.rename('./text','text.text',(err)=>{
   if(err) throw err;
   console.log('重命名完成');
 })

 /**
  * 删除文件
  */
 fs.unlink('./text.text',(err)=>{
   if(err) throw err;
   console.log('文件删除成功');
 })

 /**
  * ./ 读取当前目录有哪些文件
  * ../ 读取上级目录哪些文件
  */
 fs.readdir('./',(err,files)=>{
  if(err) throw err;
   console.log(files);
 })