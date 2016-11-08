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
var zigzagLevelOrder = function(root) {
    if (root === null) {
        return [];
    }

    var result = [],
        queue = [root],
        preDeep = 0;
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

        if (preDeep !== deep && deep % 2 === 0) {
            result[deep - 1].reverse();
        }

        preDeep = deep;
    }

    if (result.length % 2 === 0) {
        result[result.length - 1].reverse();
    }

    return result;
};
