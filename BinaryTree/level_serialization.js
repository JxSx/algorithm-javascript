/**
 * leetcode 剑指 Offer 37
 */
/**
 * 层序遍历的序列化和反序列化
 */

function serializeLevel(root) {
    if (!root) {
        return [];
    }
    let arr = [];
    let queue = [];
    queue.push(root);
    while (queue.length) {
        const node = queue.shift();
        if (node) {
            arr.push(node.val);
            queue.push(node.left)
            queue.push(node.right);
        } else {
            arr.push(null);
        }
    }
    return arr;
}



function TreeNode(val) {
    this.val = val;
}

/**
 * 对广度优先遍历的结果进行反序列化
 * @param {*} arr 
 */
function deserializeLevel(arr) {
    if (!arr || !arr.length) {
        return null;
    }
    let queue = [];
    const root = new TreeNode(arr.shift());
    queue.push(root);

    while (queue.length) {
        const node = queue.shift();
        const v = arr.shift();
        if (v != null) {
            node.left = new TreeNode(v);
            queue.push(node.left);
        }
        const rv = arr.shift();
        if (rv != null) {
            node.right = new TreeNode(rv);
            queue.push(node.right);
        }
    }
    return root;
}
if (require.main === module) {
    const tree = deserializeLevel([5, 2, 3, null, null, 2, 4, 3, 1]);
    console.log(JSON.stringify(tree, null, 2))

    
    const list = serializeLevel(tree);
    console.log(list)
}

module.exports = {
    serializeLevel, deserializeLevel
}