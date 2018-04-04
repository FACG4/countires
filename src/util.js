var countries = require('./country.json')
// console.log(countries)
// var arr = [];

function returnList(input){
  // var arr = countries[input].countries


  var tempArr = countries[input].countries.map(x=>x.country)
  // console.log(...tempArr)

return tempArr;
}


function search(name){
  console.log(returnList('P').filter(country => country.startsWith(name)))
  // console.log(returnList('A').startsWith(name))
}
// search('')
// search('Pa')
// console.log('-------------');
// search('Pal')
// console.log('-------------');
// search('Pale')
