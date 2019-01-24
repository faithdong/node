/*
 * @Author: zhongxd 
 * @Date: 2019-01-24 11:28:49 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-24 17:15:32
 * 
 * Buffer 常用API
 * toString()
 * equals()
 * indexOf()
 */


const buf = Buffer.from('this is a test !'); //定义Buffer 实例

console.log(buf.length); //输出 16

console.log(buf.toString('base64')); //输出 dGhpcyBpcyBhIHRlc3QgIQ==

console.log(buf.toString('base64',0,3)); // 输出 dGhp

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3); //输出 <Buffer 00 00 00 00 00 00 00 00 b0 d6>
console.log(buf3.fill(10, 2, 6)); // 输出 <Buffer 00 00 0a 0a 0a 0a 00 00 b0 d6>

const buf4 = Buffer.from('test');
const buf5 = Buffer.from('test');
const buf6 = Buffer.from('test!');

console.log(buf4.equals(buf5)); // 输出 true
console.log(buf4.equals(buf6)); // 输出 false

console.log(buf4.indexOf('es')); // 输出 1
console.log(buf4.indexOf('esa')); //输出 -1


const buf7 = Buffer.from('中文字符串!');

for(let i=0;i<buf7.length;i+=5){
  const b = Buffer.allocUnsafe(5);
  buf.copy(b,0,i);
  console.log(b.toString());
}
