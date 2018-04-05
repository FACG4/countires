const test = require('tape')
const util = require('../src/util')

test('returnList function', function(t) {
const actual = util.search('P');
const expected=[ 'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal' ]
t.deepEqual(actual, expected);
t.end();
});


test('returnList function', function(t) {
const actual = util.search('Pal');
const expected=[
  'Palau',
  'Palestine']
t.deepEqual(actual, expected);
t.end();
});
