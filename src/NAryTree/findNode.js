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

/**
 * 在树中查找某个节点，返回路径
 * @param {*} root 
 * @param {*} data 
 * @param {*} arr 
 */
function findNodePath(root, data, arr = []) {
    if (!root) return null;
    if (root.name === data) {
        arr.push(root.name);
        return arr;
    }
    if (!root.children) {
        return null;
    }
    arr.push(root.name); // 入栈
    for (let item of root.children) {
        let node = findNodePath(item, data, arr);
        if (node) return node;
    }
    arr.pop(); // 出栈
}

console.log(findNode(nAryTreeDataSource, "铜川"))
console.log(findNodePath(nAryTreeDataSource, "铜川"))