import {expect} from 'chai';
import foobar from './index';

describe('foobar-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(foobar.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Luke Skywalker`', function() {
      expect(foobar.all).to.include('Luke Skywalker');
    });
  });

});
