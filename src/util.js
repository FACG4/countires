var countries = require('./country.json')
// const data = require('./router');
// console.log(countries)
// var arr = [];

function returnList(input){
  // var arr = countries[input].countries


  var tempArr = countries[input].countries.map(x=>x.country)
  // console.log(...tempArr)

return tempArr;
}

var result;
function search(name){
  result = returnList(name[0]).filter(country => country.startsWith(name));

  return result
  // console.log(returnList('A').startsWith(name))
}
// search('')
// search('Pa')
// console.log('-------------');
// search('Pal')
// console.log('-------------');
// search('Pale')



module.exports = search;
