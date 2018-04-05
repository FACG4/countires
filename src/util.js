var countries = require('./country.json')


function returnList(input){
  var tempArr = countries[input].countries.map(x=>x.country)
return tempArr;
}

var result;
function search(name){
  if(name){
  let newName = name.slice(1).toLowerCase();
  let firstLetter = name[0].toUpperCase()
  result = returnList(firstLetter).filter(country => country.startsWith(firstLetter+newName));
  return result
  }
}

module.exports.search = search;
