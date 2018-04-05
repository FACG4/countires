const fs = require('fs');
const path = require('path');
const search = require('./util');
//handler function
// let queryString = require('querystring');

 handler = (request, response) => {
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


  }
  else if (endpoint == '/input'){
    // response.writeHead(302, {'Location': '/'});
    // response.writeHead(200, {'Content-type': 'text/plain'});
    console.log(request);
    let allData = '';
    request.on('data', (chunk) => allData += chunk)
    request.on('end', () => {
      allData = allData.replace('input=','');
      console.log('allData', allData);
      var result = search(allData);

      response.end(JSON.stringify(result));
      // console.log(JSON.stringify(result))
    });


  }


}

if(typeof module !== undefined){
  module.exports = handler;
}
