/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }

    return BST(1, n);
};

function BST(left, right) {
    var trees = [];

    if (left > right) {
        trees.push(null);
        return trees;
    }

    for (var i = left; i <= right; i++) {
        var lefts = BST(left, i - 1);
        var rights = BST(i + 1, right);
        for (var j = 0, lenl = lefts.length; j < lenl; j++) {
            for (var k = 0, lenr = rights.length; k < lenr; k++) {
                var root = new TreeNode(i);
                root.left = lefts[j];
                root.right = rights[k];
                trees.push(root);
            }
        }
    }

    return trees;
}
