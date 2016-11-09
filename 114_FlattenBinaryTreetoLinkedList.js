/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (root === null) {
        return;
    }

    while (root) {
        if (root.left) {
            var tmp = root.left;
            while (tmp.right) {
                tmp = tmp.right;
            }
            tmp.right = root.right;
            root.right = root.left;
            root.left = null;
        }
        root = root.right;
    }
};
