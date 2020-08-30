
const { binaryTreeDataSource } = require('../common/data');
/**
 * 前序遍历实现序列化，二叉树转换为数组
 * @param {*} root 
 * @param {*} arr 
 */
function serialize(root, arr = []) {
    if (!root) {
        arr.push(null);
        return;
    }
    arr.push(root.val);
    serialize(root.left, arr);
    serialize(root.right, arr);
    return arr;
}

function TreeNode(val) {
    this.val = val;
}

/**
 * 反序列化，数组转换为二叉树
 * @param {*}} arr 
 */
function deserialize(arr) {
    if (!arr.length) {
        return null;
    }
    const v = arr.shift();
    if (v == null) {
        return null;
    }
    const root = new TreeNode(v);
    root.left = deserialize(arr);
    root.right = deserialize(arr);
    return root;
}
if (require.main === module) {
    const list = serialize(binaryTreeDataSource);
    console.log(list)

    console.log(JSON.stringify(deserialize(list), null, 2))
}

module.exports = {
    serialize, deserialize
}