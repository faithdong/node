/*
 * @Author: zhongxd 
 * @Date: 2019-01-17 16:30:37 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-17 16:39:21
 * 
 * process 进程
 */


 const {argv , argv0 , execArgv , execPath } = require('process');
 
 argv.forEach(item=>{
   console.log(item);
 })


 console.log(argv0);

 console.log(execArgv);

 console.log(execPath);