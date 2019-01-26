/*
 * @Author: zhongxd 
 * @Date: 2019-01-26 11:08:49 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-26 11:34:31
 * 
 * Node 中文字符串
 */

 const StringDecoder = require('string_decoder').StringDecoder;
 const decoder = new StringDecoder('UTF8');

const buf7 = Buffer.from('中文字符串!');

for(let i=0;i<buf7.length;i+=5){
  const b = Buffer.allocUnsafe(5);
  buf7.copy(b,0,i);
  console.log(b.toString());
}


for(let i=0;i<buf7.length;i+=5){
  const b = Buffer.alloc(5);
  buf7.copy(b,0,i); // 将 buf7 拷贝到  b
  console.log(decoder.write(b));
}

