class TreeNode {
    val: string | number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val: string | number) {
        this.val = val;
        this.left = this.right = null;
    }
}

module.exports = TreeNode;