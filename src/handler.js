const fs = require('fs');
const path = require('path');
const search = require('./util');
//handler function
// let queryString = require('querystring');

 handler = (request, response) => {
  let endpoint = request.url;
  if(endpoint == '/'){
    fs.readFile(path.join(__dirname, '../public/index.html'), function(error, file){
      if(error){
        console.log(error,'error');
        response.writeHead(500, {'Content-type': 'text/html'});
        response.end('<h2>Internal Server Error</h2>');
        // console.log(error)
      } else {
        response.writeHead(200, {'Content-type': 'text/html'});
        response.end(file);
      }
    });
  }
  else if (endpoint == '/input'){
    response.writeHead(302, {'Location': '/'});
    let allData = '';
    request.on('data', (chunk) => allData += chunk)
    request.on('end', () => {
      allData = allData.replace('input=','');
      // console.log(allData);
      // console.log(allData.replace('input=',''));

      search(allData);
      response.end();
    })


  }
  else if (endpoint.startsWith('/public')) {
    const extention = endpoint.split('.')[1];
    const fileType = {
      html: 'text/html',
      css: 'text/css',
      js: 'application/javascript',
      ico: 'image/x-icon'
    }
    fs.readFile(path.join(__dirname, '..', endpoint), (error, file) => {
      if (error) {
        response.writeHead(500, 'content-Type: text/html');
        response.end('<h1>internal server Error</h1>');
      } else {
        response.writeHead(200, 'content-Type: ' + fileType[extention]);
        response.end(file);
      }
    });
  }
}


if(typeof module !== undefined){
  module.exports = handler;
}
