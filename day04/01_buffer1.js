/*
 * @Author: zhongxd 
 * @Date: 2019-01-23 19:42:20 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-23 20:26:50
 * 创建Buffer
 * alloc()
 * allocUnsafe()
 */



const buf = Buffer.alloc(5);

console.log(buf);// 输出: <Buffer 00 00 00 00 00> 用 0 填充 Buffer

const buf1 = Buffer.alloc(5, 'a');
console.log(buf1); // 输出: <Buffer 61 61 61 61 61> 用a填充

const buf2 = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
console.log(buf2);// 输出: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>



const buf5 = Buffer.allocUnsafe(10);
console.log(buf5);// 输出: <Buffer a0 8b 28 3f 01 00 00 00 50 32>
buf5.fill(0);
console.log(buf5);// 输出: <Buffer 00 00 00 00 00 00 00 00 00 00>