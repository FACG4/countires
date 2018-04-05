var countries = require('./country.json')


function returnList(input){
  var tempArr = countries[input].countries.map(x=>x.country)
return tempArr;
}

var result;
function search(name){

  result = returnList(name[0]).filter(country => country.startsWith(name));

  return result
}

module.exports = search;
