var assert = require('assert');

const { insertSort } = require('../../src/Sort/01_insertSort');
const { data } = require('../../src/Sort/common');


describe('插入排序', function () {
    describe('#inserSort()', function () {
        it('插入排序，返回正确结果', function () {
            let arr = insertSort(data)
            console.log(arr);
            assert.ok(Array.isArray(arr))
        });
    });
});