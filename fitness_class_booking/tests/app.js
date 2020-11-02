import chai from 'chai';
import mocha from 'mocha';

const assert = chai.assert;

describe('Array', function() {
    it('should start empty', function() {
        let arr = [];
        assert.equal(arr.length, 0);
    });
});