var assert = require('assert');

const { nAryTreeDataSource } = require('../../src/common/data');
const { BFS, DFS, levelOrder } = require('../../src/NAryTree/traversal');

describe('NAryTree', function () {
  describe('#BFS()', function () {
    it('广度优先遍历，返回一维数组', function () {
      let arr = BFS(nAryTreeDataSource)
      console.log(arr);
      assert.ok(Array.isArray(arr))
    });
  });
});
describe('NAryTree', function () {
  describe('#DFS()', function () {
    it('深度优先遍历，返回一维数组', function () {
      let arr = DFS(nAryTreeDataSource);
      console.log(arr);
      assert.ok(Array.isArray(arr))
    });
  });
});
describe('NAryTree', function () {
  describe('#levelOrder()', function () {
    it('层序遍历，返回二维数组', function () {
      let arr = levelOrder(nAryTreeDataSource);
      console.log(arr)
      assert.equal(arr.length, 4);
    });
  });
});