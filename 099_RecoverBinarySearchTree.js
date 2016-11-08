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
var recoverTree = function(root) {
    var pre = null,
        mistake1 = null,
        mistake2 = null;

    function traversal(tRoot) {
        if (tRoot === null) {
            return;
        }

        traversal(tRoot.left);

        if (pre !== null && pre.val > tRoot.val) {
            if (mistake1 === null) {
                mistake1 = pre;
                mistake2 = tRoot;
            } else {
                mistake2 = tRoot;
            }
        }

        pre = tRoot;

        traversal(tRoot.right);
    }

    traversal(root);

    var tmp = mistake1.val;
    mistake1.val =  mistake2.val;
    mistake2.val = tmp;
};
