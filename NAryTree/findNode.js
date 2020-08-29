const { nAryTreeDataSource } = require('../common/data');
/**
 * 树结构查找某个结点算法
 * @param {*} root 
 * @param {*} data 
 */
function findNode(root, data) {
    console.log(root.name)
    if (!root) return null;
    if (root.name === data) {
        return root;
    }
    if (!root.children) {
        return null;
    }
    for (let item of root.children) {
        let node = findNode(item, data);
        if (node) return node;
    }
}

console.log(findNode(nAryTreeDataSource, "铜川"))