
const { binaryTreeDataSource } = require('../common/data');
/**
 * 前序遍历实现序列化
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
 * 反序列化，前序遍历还原对象
 * @param {*}} arr 
 */
function deserialize(arr) {
    let index = 0;
    function loop(arr) {
        if (!arr[index]) {
            return null;
        }
        const root = new TreeNode(arr[index]);
        index++;
        root.left = loop(arr);
        index++;
        root.right = loop(arr);
        return root;
    }
    return loop(arr);
}
if (require.main === module) {
    const list = serialize(binaryTreeDataSource);
    console.log(list)
    
    console.log(JSON.stringify(deserialize(list), null, 2))
}

module.exports = {
    serialize, deserialize
}