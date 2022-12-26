const http = require('http');
// add the fs library for reading from the file system
const fs = require('fs');
const server = http.createServer((request, response) => {
    // by default we'll serve index.html
    let filename = "index.html";
    let contentType = "text/html";
    // if the client is requesting style.css, we'll serve it instead
    if(request.url === "/style.css") {
      filename = "style.css";
      contentType = "text/css";
    }
    fs.readFile(filename, function(err, content) {
      if(err) {
          response.statusCode = 500;
          response.end(`Could not serve ${filename}`);
      }
      else {
          response.statusCode = 200;
          response.setHeader('Content-Type', contentType);
          response.end(content);
      }
    });
  });

  server.listen({ port: 3000, host: 'localhost' }, () => {
    console.log('Up and Running!');
  });