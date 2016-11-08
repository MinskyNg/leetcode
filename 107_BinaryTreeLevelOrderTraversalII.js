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
var levelOrderBottom = function(root) {
    if (root === null) {
        return [];
    }

    var result = [],
        queue = [root],
        preDeep = -1;
    root.deep = 0;

    while (queue.length) {
        var node = queue.shift();
        var deep = node.deep;

        if (preDeep !== deep) {
            result.unshift([]);
        }

        result[0].push(node.val);

        if (node.left) {
            node.left.deep = deep + 1;
            queue.push(node.left);
        }

        if (node.right) {
            node.right.deep = deep + 1;
            queue.push(node.right);
        }

        preDeep = deep;
    }


    return result;
};
