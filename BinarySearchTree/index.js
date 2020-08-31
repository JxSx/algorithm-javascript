/**
 * 学习链接：https://labuladong.gitbook.io/algo/shu-ju-jie-gou-xi-lie/er-cha-sou-suo-shu-cao-zuo-ji-jin
 * 
 * 二叉搜索树的增、删、查；判断合法性
 * 
 * 二叉搜索树的定义是：一个二叉树中，任意节点的值要大于等于左子树所有节点的值，且要小于等于右边子树的所有节点的值。
 */

const { deserializeLevel } = require("../BinaryTree/level_serialization");
const TreeNode = require("../common/TreeNode");
/**
 * 判断合法性
 * @param {*} root 
 * @param {*} min 判断右子树时传递根结点
 * @param {*} max 判断左子树时传递根结点
 */
function isValidBST(root, min, max) {
    if (!root) return true;
    if (min && min.val > root.val) return false;
    if (max && max.val < root.val) return false;

    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
}
/**
 * 在BST中查找一个数是否存在
 * @param {*} root 
 * @param {*} target 
 */
function isInBST(root, target) {
    if (!root) return false;
    console.log(root.val)
    if (root.val === target) return true;
    if (root.val < target) {
        return isInBST(root.right, target);
    }
    if (root.val > target) {
        return isInBST(root.left, target);
    }
}

/**
 * 在BST中插入一个数
 * @param {*} root 
 * @param {*} target 
 */
function insertInfoBST(root, target) {
    if (!root) return new TreeNode(target);
    if (root.val < target) {
        root.right = insertInfoBST(root.right, target);
    }
    if (root.val > target) {
        root.left = insertInfoBST(root.left, target);
    }
    return root;
}

if (require.main === module) {
    const tree = deserializeLevel([5, 2, 6, 1, 4, null, 7, null, null, 3])
    console.log(JSON.stringify(tree, null, 2))
    console.log("合法性：", isValidBST(tree))
    console.log("查找结点：", isInBST(tree, 3))
    const newTree = insertInfoBST(tree, 2.2);
    console.log("新树：", JSON.stringify(newTree, null, 2));
}