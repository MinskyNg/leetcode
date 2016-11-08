/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var createTree = function(preorder, preStart, preEnd, inorder, inStart, inEnd) {
    if (preStart > preEnd) {
        return null;
    }

    var root = new TreeNode(preorder[preStart]);

    for (var i = inStart; i <= inEnd; i++) {
        if (inorder[i] === preorder[preStart]) {
            break;
        }
    }

    var len = i - inStart;

    root.left = createTree(preorder, preStart + 1, preStart + len, inorder, inStart, i - 1);
    root.right = createTree(preorder, preStart + len + 1, preEnd, inorder, i + 1, inEnd);

    return root;
}


var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }

    return createTree(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};
