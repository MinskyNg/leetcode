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
 * @return {number[][]}
 */
var dfs = function(result, root, sum, path) {
    if (root.left !== null) {
        dfs(result, root.left, sum - root.val, path.concat(root.val));
    }

    if (root.right !== null) {
        dfs(result, root.right, sum - root.val, path.concat(root.val));
    }

    if (root.left === null && root.right === null) {
        if (sum === root.val) {
            path.push(root.val);
            result.push(path);
        }
    }

    return;
};

var pathSum = function(root, sum) {
    if (root === null) {
        return [];
    }

    var result = [];

    dfs(result, root, sum, []);

    return result;
};
