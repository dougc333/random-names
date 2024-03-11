import uniqueRandomArray from 'unique-random-array';
import foobarNames from './foobar-names.json';

const mainExport = {
  all:foobarNames,
  random:uniqueRandomArray(foobarNames)
}

export default mainExport
module.exports = mainExport
