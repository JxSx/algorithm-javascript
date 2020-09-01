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

/**
 * 获取最小节点
 * @param {*} node 
 */
function getMinNode(node) {
    while (node.left) {
        node = node.left;
    }
    return node;
}
/**
 * 删除某个节点
 * @param {*} root 
 * @param {*} target 
 */
function deleteNode(root, target) {
    if (!root) return null;
    if (root.val === target) {
        // 分三种情况
        // 1. 当前节点没有左、右子节点
        if (root.left === null && root.right === null) {
            return null;
        }
        // 2. 当前节点没有左节点或者右子节点
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;
        // 3. 当前节点左右子节点都包含
        const minNode = getMinNode(root.right); // 获取右子树最小节点
        root.val = minNode.val; // 修改当前节点值
        root.right = deleteNode(root.right, minNode.val); //删除右子树最小节点
    } else if (root.val < target) {
        root.right = deleteNode(root.right, target);
    } else if (root.val > target) {
        root.left = deleteNode(root.left, target);
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
    console.log("删除节点：", JSON.stringify(deleteNode(newTree, 2), null, 2))
}