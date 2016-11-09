/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var height = function(root) {
    if (root === null) {
        return 0;
    }
    root.val = Math.max(height(root.left), height(root.right)) + 1;
    return root.val;
};


var helper = function(root) {
    if (root === null || (root.left === null && root.right === null) || (root.left === null && root.right && root.right.val === 1) || (root.left && root.left.val === 1 && root.right === null)) {
        return true;
    }

    if (root.left === null || root.right === null) {
        return false;
    }

    return (Math.abs(root.left.val - root.right.val) <= 1) && helper(root.left) && helper(root.right);
};


var isBalanced = function(root) {
    height(root);
    return helper(root);
};
