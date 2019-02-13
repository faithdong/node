/*
 * @Author: zhongxd 
 * @Date: 2019-02-04 11:26:32 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-02-04 20:15:05
 */

const fs = require('fs');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

module.exports = async function (req, res, filePath) {
  try {
    const stats = await stat(filePath);
    if (stats.isFile()) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      fs.createReadStream(filePath).pipe(res);
    } else if (stats.isDirectory()) {
      const files = await readdir(filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(files.join(','));
    }
  } catch (ex) {
    console.error(ex);
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${filePath} is not a dirctory or file\n ${ex.toString()}`);
  }
}