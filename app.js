import http from 'http';
import config from './config';
import initDbConnection from './db/connect';

initDbConnection();

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(config.app.port, config.app.host);

console.log(`Server running at ${config.app.host}:${config.app.port}`);