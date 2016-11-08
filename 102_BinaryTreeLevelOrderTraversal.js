/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }

    var result = [],
        queue = [root];
    root.deep = 0;

    while (queue.length) {
        var node = queue.shift();
        var deep = node.deep;

        if (result[deep] !== undefined) {
            result[deep].push(node.val);
        } else {
            result[deep] = [node.val];
        }

        if (node.left) {
            node.left.deep = deep + 1;
            queue.push(node.left);
        }

        if (node.right) {
            node.right.deep = deep + 1;
            queue.push(node.right);
        }
    }

    return result;
};
