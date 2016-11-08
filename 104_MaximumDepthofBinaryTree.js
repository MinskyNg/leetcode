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
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }

    var result = 0,
        queue = [root];
    root.deep = 1;

    while (queue.length) {
        var node = queue.shift();
        var deep = node.deep;

        result= Math.max(result, deep);

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
