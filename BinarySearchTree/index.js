/**
 * 二叉搜索树的增、删、查；判断合法性
 * 
 * 二叉搜索树的定义是：一个二叉树中，任意节点的值要大于等于左子树所有节点的值，且要小于等于右边子树的所有节点的值。
 */

const { deserializeLevel } = require("../BinaryTree/level_serialization");

/**
 * 判断合法性
 * @param {*} root 
 */
function isValidBST(root, min, max) {
    if (!root) return true;
    if (min && min.val > root.val) return false;
    if (max && max.val < root.val) return false;

    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
}

const tree = deserializeLevel([5, 2, 6, 1, 4, null, 7, null, null, 3])
console.log(JSON.stringify(tree, null, 2))