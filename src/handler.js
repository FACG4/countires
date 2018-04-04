let fs = require('fs');
let path = require('path');
//handler function

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
  else if (endpoint == '/action'){
    response.writeHead(200, {'Content-type': 'text/plain'});

  }
}


if(typeof module !== undefined){
  module.exports = handler;
}
