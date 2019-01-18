/*
 * @Author: zhongxd 
 * @Date: 2019-01-18 18:39:47 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-01-18 19:03:30
 * 
 * path 模块API http://nodejs.cn/api/path.html
 * 文件路径处理 API
 */


const {normalize , join , resolve , basename , dirname , extname , parse ,format} = require('path');

const filePath = 'F:\\mycodebook\\A_my_javascript_code_book\\12_Node\\node_1\\day2\\02_path.js';


console.log(normalize('/usr//local/bin')); //处理文件路径 --->处理结果：\usr\local\bin
console.log(normalize('/usr//local/../bin'));//处理文件路径 --->处理结果： \usr\bin


console.log(join('/foo', 'bar', 'baz/asdf', 'quux', '..'));//拼接文件路径 \foo\bar\baz\asdf

console.log(resolve('./')); //获取当前文件路径 -->结果：            F:\mycodebook\A_my_javascript_code_book\12_Node\node_1\day2
console.log(resolve('../')); //获取当前文件路径的上一层路径处理结果：F:\mycodebook\A_my_javascript_code_book\12_Node\node_1


console.log(basename(filePath)); //文件名称-->结果：02_path.js
console.log(dirname(filePath)); //文件路径-->结果：F:\mycodebook\A_my_javascript_code_book\12_Node\node_1\day2
console.log(extname(filePath)); //文件扩展名-->结果： .js

console.log(parse(filePath));//结果：{ root: 'F:\\',dir: 'F:\\mycodebook\\A_my_javascript_code_book\\12_Node\\node_1\\day2',base: '02_path.js',ext: '.js',name: '02_path' }
console.log(format(parse(filePath))); //结果：F:\mycodebook\A_my_javascript_code_book\12_Node\node_1\day2\02_path.js

