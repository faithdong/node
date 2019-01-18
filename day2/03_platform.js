/*
 * @Author: zhongxd 
 * @Date: 2019-01-18 19:06:54 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-18 19:11:26
 * 
 * 操作系统相关的 path 
 */

 const { sep , delimiter , win32 , posix } = require('path');

 console.log(' sep：' , sep );
 console.log('win sep：' , win32.sep );

 console.log(' path：' , process.env.PATH );

 console.log(' delimiter：' , delimiter );
 console.log('win delimiter：' , win32.delimiter );
