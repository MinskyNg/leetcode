/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var createTree = function(inorder, inStart, inEnd, postorder, postStart, postEnd) {
    if (postStart > postEnd) {
        return null;
    }

    var root = new TreeNode(postorder[postEnd]);

    for (var i = inStart; i <= inEnd; i++) {
        if (inorder[i] === postorder[postEnd]) {
            break;
        }
    }

    var len = i - inStart;

    root.left = createTree(inorder, inStart, i - 1, postorder, postStart, postStart + len - 1);
    root.right = createTree(inorder, i + 1, inEnd, postorder, postStart + len, postEnd - 1);

    return root;
}


var buildTree = function(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) {
        return null;
    }

    return createTree(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};
