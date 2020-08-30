/**
 * leetcode 剑指 Offer 37
 */
/**
 * 层序遍历的序列化和反序列化
 */
/**
 * 二叉树转换为数组
 * @param {*} root 
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
 * 数组转换为二叉树
 * @param {*} arr 
 */
function deserializeLevel(arr) {
    if (!arr || !arr.length) {
        return null;
    }
    let queue = [];
    const root = new TreeNode(arr[0]);
    queue.push(root);

    // 如下方案，队列最终的节点会产生不必要的循环
    // while (queue.length) {
    //     const node = queue.shift();
    //     const leftValue = arr.shift();
    //     if (leftValue != null) {
    //         node.left = new TreeNode(leftValue);
    //         queue.push(node.left);
    //     }
    //     const rightValue = arr.shift();
    //     if (rightValue != null) {
    //         node.right = new TreeNode(rightValue);
    //         queue.push(node.right);
    //     }
    // }
    for (let i = 1; i < arr.length;) {
        const node = queue.shift();
        const leftValue = arr[i++];
        if (leftValue !== null) {
            node.left = new TreeNode(leftValue);
            queue.push(node.left);
        }
        const rightValue = arr[i++];
        if (rightValue != null) {
            node.right = new TreeNode(rightValue);
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