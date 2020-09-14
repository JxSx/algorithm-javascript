
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

if (module === require.main) {
    const { nAryTreeDataSource } = require('../common/data');
    console.log(DFS(nAryTreeDataSource));
    console.log(BFS(nAryTreeDataSource));
    console.log(levelOrder(nAryTreeDataSource));
}

module.exports = {
    BFS, DFS, levelOrder
}