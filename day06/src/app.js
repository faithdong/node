/*
 * @Author: zhongxd 
 * @Date: 2019-02-04 10:19:32 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-02-04 11:30:24
 */



const http = require('http');
const conf = require('./config/defaultConfig');
const chalk = require('chalk');
const path = require('path');
const route = require('./helper/route');

const server = http.createServer((req, res) => {
  const filePath = path.join(conf.root, req.url);
  
  route(req,res,filePath);
});

server.listen(conf.port, conf.hostname, () => {
  const addr = ` http://${conf.hostname}:${conf.port}`;
  console.info(`server started at ${chalk.green(addr)}`);

})