const { binaryTreeDataSource } = require('../common/data');
/*
            F
          /   \
        B       G
      /   \       \
     A     D       I
          / \     /
         C   E   H

*/
/**
 * 前序遍历，根--左--右
 * @param {*} root 
 * @param {*} arr 
 */
const preOrder = function (root, arr = []) {
    if (!root) return arr;
    arr.push(root.val); // 先保存根节点
    preOrder(root.left, arr); // 遍历左子树
    preOrder(root.right, arr); // 遍历右子树
    return arr;
}
console.log("前序遍历：", preOrder(binaryTreeDataSource));



/**
* 中序遍历，左--右--根
* @param {*} root 
* @param {*} arr 
*/
const inOrder = function (root, arr = []) {
    if (!root) return arr;
    inOrder(root.left, arr); // 遍历左子树
    arr.push(root.val); // 中间保存根节点
    inOrder(root.right, arr); // 遍历左子树
    return arr;
}
console.log("中序遍历：", inOrder(binaryTreeDataSource));


/**
 * 后序遍历，左--右--根
 * @param {*} root 
 * @param {*} arr 
 */
const postOrder = function (root, arr = []) {
    if (!root) return arr;
    postOrder(root.left, arr);
    postOrder(root.right, arr);
    arr.push(root.val);
    return arr;
}
console.log("后序遍历：", postOrder(binaryTreeDataSource));



/**
* 广度优先遍历，返回一维数组
* @param {*} root 
*/
var BFS = function (root) {
    let queue = []; //JS数组实现队列，先进先出
    let result = [];
    queue.push(root);
    while (queue.length > 0) {
        let node = queue.shift(); // 取出头元素
        result.push(node.val);

        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return result;
};

console.log("深度优先遍历：", BFS(binaryTreeDataSource));


/**
 * 层序遍历，返回二维数组，包含每一层元素
 * @param {*} root 
 */
function levelOrder(root) {
    let queue = []; //
    let result = [];
    queue.push(root);
    while (queue.length > 0) {
        let size = queue.length; // 当前层级的个数
        let levelArr = [];
        for (let i = 0; i < size; i++) { // 嵌套一层循环，处理每个层级的数据
            const node = queue.shift();
            levelArr.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(levelArr);
    }
    return result;
}

console.log("层序遍历：", levelOrder(binaryTreeDataSource));