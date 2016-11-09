/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) {
        return 0;
    }

    var left = minDepth(root.left);
    var right = minDepth(root.right);

    if (left === 0 && right !== 0) {
        left = Number.MAX_VALUE;
    }

    if (left !== 0 && right === 0) {
        right = Number.MAX_VALUE;
    }

    return Math.min(left, right) + 1;
};
