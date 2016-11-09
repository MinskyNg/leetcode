/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var helper = function(root, sum) {
    if (root.left !== null) {
        if (helper(root.left, sum - root.val)) {
            return true;
        }
    }

    if (root.right !== null) {
        if (helper(root.right, sum - root.val)) {
            return true;
        }
    }

    if (root.left === null && root.right === null) {
        return sum === root.val;
    }

    return false;
};


var hasPathSum = function(root, sum) {
    if (root === null) {
        return false;
    }

    return helper(root, sum);
};
