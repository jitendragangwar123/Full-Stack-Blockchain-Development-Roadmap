//index.js
const http = require('http');
const server = http.createServer(function(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
});

server.listen({ port: 3000, host: 'localhost' }, function() {
  console.log('Server is running!');
});

//To run the server :- >>node index 


//HTML Node server
//index.js
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

//index.html
/*<DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My Hello World</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    Hello Node Js!
  </body>
</html>
*/

//style.css
/*body {
    background-color: rgb(198, 122, 122);
    color: rgb(4, 255, 0);
    text-align: center;
    font-size: 40px;
  }
  */
