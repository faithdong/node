/*
 * @Author: zhongxd 
 * @Date: 2019-02-02 21:28:46 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-02-02 21:33:10
 * 
 * 回调地域解决方法
 */


 const fs = require('fs');
 const promisify = require('util').promisify;

 const read = promisify(fs.readFile);

 read('./04_fs4.js').then((data)=>{
  console.log(data.toString());
 }).catch((ex)=>{
   console.log(ex);
 })



 async function test(){
   try{
    const content = await read('./04_fs4.js');
    console.log(content.toString());
   }catch(ex){
     console.log(ex);
   }
 }



 test();
 