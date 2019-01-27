/*
 * @Author: zhongxd 
 * @Date: 2019-01-27 11:48:48 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-27 11:55:08
 * 
 * Node fs文件系统
 * 写文件API
 */


 const fs = require('fs');

 //异步操作
 fs.writeFile('./text','写入的内容','utf8',(err,data)=>{
   if(err) throw err;
   console.log('写入成功，请到当前目录查看名为text的文件');
 });

 //同步操作
 const data = fs.writeFileSync('./text1','我是text1写入的内容','utf8');
 console.log(data + '写入成功，请到当前目录查看名为text1的文件');