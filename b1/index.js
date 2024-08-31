const http = require("node:http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.write("<h1>Hello, Cường</h1>");
    response.end();
  })
  .listen(8080);
