/*
 * @Author: zhongxd 
 * @Date: 2019-01-17 16:03:12 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-17 16:08:16
 */


const fs = require('fs');

fs.readFile('./06_fs.js', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

