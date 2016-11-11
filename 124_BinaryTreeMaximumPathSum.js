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
var maxPathSum = function(root) {
    if (root === null) {
        return 0;
    }

    var result = root.val;

    var helper = function(root) {
        var leftSum = root.left ? helper(root.left) : 0;
        var rightSum = root.right ? helper(root.right) : 0;
        var returnVal = Math.max(root.val, root.val + leftSum, root.val + rightSum);

        result = Math.max(result, returnVal, root.val + leftSum + rightSum);

        return returnVal;
    };

    helper(root);

    return result;
};
