/**
 *  leetcode 104
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    const queue = [];
    queue.push(root);
    let depth = 0;
    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        depth++;
    }
    return depth;
};


const tree = deserializeLevel([3, 9, 20, null, null, 15, 7]);
console.log(JSON.stringify(tree, null, 2))
console.log(minDepth(tree))