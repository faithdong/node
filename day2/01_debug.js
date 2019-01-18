/*
 * @Author: zhongxd 
 * @Date: 2019-01-18 10:36:49 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-18 10:51:22
 * 
 * node 调试
 */


function test1() {
  const a = parseInt(Math.random() * 10);
  const b = parseInt(Math.random() * 10);
  const c = test2(a, b);
}

function test2(a, b) {
  if (a > b) {
    a += a * 2
  } else {
    b -= a
  }
  return a + b;
}

test1();