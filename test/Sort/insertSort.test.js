var assert = require('assert');

const { insertSort, insertSortImproved } = require('../../src/Sort/01_insertSort');
const data = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
describe('插入排序', function () {
    describe('#inserSort()', function () {
        it('插入排序，返回正确结果', function () {
            let arr = insertSort(data)
            console.log(JSON.stringify(arr))
            assert.strictEqual(arr.join(), "2,3,4,5,15,19,26,27,36,38,44,46,47,48,50");
        });
    });
});
describe('插入排序', function () {
    describe('#inserSortImporved()', function () {
        it('插入排序改进算法，返回正确结果', function () {
            let arr = insertSortImproved(data)
            console.log(JSON.stringify(arr))
            assert.strictEqual(arr.join(), "2,3,4,5,15,19,26,27,36,38,44,46,47,48,50");
        });
    });
});