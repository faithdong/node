/*
 * @Author: zhongxd 
 * @Date: 2019-01-23 20:27:01 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-23 20:59:37
 * buffer常用api
 * byteLength
 * concat
 * from
 */


const str = '\u00bd + \u00bc = \u00be';
console.log(`${str}: ${str.length} 个字符, ` +`${Buffer.byteLength(str, 'utf8')} 个字节`);


// 创建一个包含字符串 'buffer' 的 UTF-8 字节的 Buffer。
const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf);

const buf1 = Buffer.from('this is a tést');
const buf2 = Buffer.from('7468697320697320612074c3a97374', 'hex');
console.log(buf1.toString());// 输出: this is a tést
console.log(buf2.toString());// 输出: this is a tést
console.log(buf1.toString('ascii'));// 输出: this is a tC)st



// 用含有三个 `Buffer` 的数组创建一个单一的 `Buffer`。
const buf4 = Buffer.alloc(10);
const buf5 = Buffer.alloc(14);
const buf6 = Buffer.alloc(18);
const totalLength = buf4.length + buf5.length + buf6.length;

console.log(totalLength); // 输出: 42

const bufA = Buffer.concat([buf4, buf5, buf6], totalLength);
console.log(bufA);// 输出: <Buffer 00 00 00 00 ...>
console.log(bufA.length);// 输出: 42