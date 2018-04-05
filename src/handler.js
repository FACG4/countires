const fs = require('fs');
const path = require('path');
const search = require('./util');
//handler function
// let queryString = require('querystring');


 const handler = (request, response) => {
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
  }else if(endpoint == '/css/style.css'){
    response.writeHead(200, {'Content-type': 'text/css'});
    fs.readFile(path.join(__dirname, '../public/css/style.css'), function(error, file){
      if(error){
        console.log(error)
        return;
      } else {
        response.end(file);
      }
    });
  }else if (endpoint == '/js/index.js'){
    response.writeHead(200, {'Content-type': 'text/js'});
    fs.readFile(path.join(__dirname, '../public/js/index.js'), function(error, file){

      if(error){
        console.log(error)
        return;
      } else {
        response.end(file);
      }
    });


  }else if(endpoint == '/js/geoScript.js'){
    response.writeHead(200, {'Content-type': 'text/js'});
    fs.readFile(path.join(__dirname, '../public/js/geoScript.js'), function(error, file){

      if(error){
        console.log(error)
        return;
      } else {
        response.end(file);
      }
    });


  }
  else if (endpoint == '/input'){
    let allData = '';
    request.on('data', (chunk) => allData += chunk)
    request.on('end', () => {
      allData = allData.replace('input=','');
      var result = util.search(allData);
      response.end(JSON.stringify(result));

    });


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
