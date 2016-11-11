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
var sumNumbers = function(root) {
    if (root === null) {
        return 0;
    }

    var sum = 0;

    var helper = function(root, num) {
        num = num * 10 + root.val;

        if (root.left === null && root.right === null) {
            sum += num;
        }

        if (root.left) {
            helper(root.left, num);
        }

        if (root.right) {
            helper(root.right, num);
        }
    };

    helper(root, 0);

    return sum;
};
