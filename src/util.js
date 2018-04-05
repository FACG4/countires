var countries = require('./country.json')


function search(name){

  if(name){
  let newName = name.slice(1).toLowerCase();
  let firstLetter = name[0].toUpperCase()
  var countriesArr = countries[firstLetter].countries.map(x=>x.country)
  return countriesArr.filter(country => country.startsWith(firstLetter+newName));

  }
}

module.exports.search = search;
