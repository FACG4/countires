const fs = require('fs');
const path = require('path');
const search = require('./util');
//handler function
let queryString = require('querystring');

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
}


if(typeof module !== undefined){
  module.exports = handler;
}
