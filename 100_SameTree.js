/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var result = true;

    function traversal(pRoot, qRoot) {
        if (qRoot === null || pRoot === null) {
            if (qRoot !== pRoot) {
                result = false;
            }
            return;
        }

        traversal(qRoot.left, pRoot.left);

        if (qRoot.val !== pRoot.val) {
            result = false;
            return;
        }

        traversal(qRoot.right, pRoot.right);
    }

    traversal(p, q);

    return result;
};
