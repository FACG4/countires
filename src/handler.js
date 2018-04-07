const fs = require('fs');
const path = require('path');
const util = require('./util');


 const handler = (request, response) => {
  let endpoint = request.url;
  if(endpoint == '/'){
    response.writeHead(200, {'Content-type': 'text/html'});
    fs.readFile(path.join(__dirname, '../public/index.html'), function(error, file){
      if(error){
        console.log(error)
        return;
      } else {
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
  }


  else if (endpoint == '/css/img3.jpg'){
    response.writeHead(200, {'Content-Type': 'image/jpg'});
    fs.readFile(path.join(__dirname, '../public/css/img3.jpg'), function(error, file){

      if(error){
        console.log(error)
        return;
      } else {
        response.end(file);
      }
    });


  }


  else if (endpoint == '/js/index.js'){
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
      let result = util.search(allData);
      response.end(JSON.stringify(result),'utf8');

    });


  }


}

if(typeof module !== undefined){
  module.exports = handler;
}
