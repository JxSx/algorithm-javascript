/**
 * leetcode 111
 */
const { deserializeLevel } = require('./level_serialization');
/**
 * 树的最小深度
 * @param {*} root 
 */
var minDepth = function (root) {
    if (!root) return 0;
    const queue = [];
    queue.push(root);
    let depth = 1;
    while (queue.length) {
        let size = queue.length;
        while (size--) {
            const item = queue.shift();
            if (item.left == null && item.right == null) {
                return depth;
            }
            if (item.left != null) {
                queue.push(item.left)
            }
            if (item.right != null) {
                queue.push(item.right)
            }

        }
        depth++;
    }
};

const tree = deserializeLevel([3, 9, 20, null, null, 15, 7]);
console.log(JSON.stringify(tree, null, 2))
console.log(minDepth(tree))