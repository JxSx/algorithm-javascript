const { nAryTreeDataSource } = require('../common/data');

/**
 * 深度优先遍历
 * @param {*} root 
 * @param {*} arr 
 */
function DFS(root, arr = []) {
    if (!root) return;
    arr.push(root.name);
    if (root.children) {
        root.children.forEach(element => {
            DFS(element, arr);
        });
    }
    return arr;
}
console.log(DFS(nAryTreeDataSource));

/**
 * 广度优先遍历，返回一维数组
 * @param {*} root 
 */
var BFS = function (root) {
    let queue = []; // 队列，先进先出
    let result = [];
    queue.push(root);
    while (queue.length > 0) {
        let node = queue.shift();
        result.push(node.name);
        if (node.children) {
            node.children.forEach(element => {
                queue.push(element);
            });
        }
    }
    return result;
};

console.log(BFS(nAryTreeDataSource));


var levelOrder = function (root) {
    let queue = []; //
    let result = [];
    queue.push(root);
    while (queue.length > 0) {
        let size = queue.length; // 当前层级的个数
        let levelArr = [];
        for (let i = 0; i < size; i++) { // 嵌套一层循环，处理每个层级的数据
            const node = queue.shift();
            levelArr.push(node.name);
            if (node.children) {
                node.children.forEach(element => {
                    queue.push(element);
                });
            }
        }
        result.push(levelArr);
    }
    return result;
};

console.log(levelOrder(nAryTreeDataSource));

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