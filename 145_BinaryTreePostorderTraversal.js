/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (root === null) {
        return [];
    }

    var result = [],
        stack = [root];

    while (stack.length) {
        var node = stack.pop();

        if (node.visited === true) {
            result.push(node.val);
        } else {
            node.visited = true;
            stack.push(node);
            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }
        }
    }

    return result;
};
