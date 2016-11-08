/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var inorderTraversal = function(root) {
    if (root === null) {
        return [];
    }

    var result = [],
        stack = [root];

    while (stack.length) {
        var node = stack.pop();
        if (node.visited === true) {
            result.push(node.val);
        } else {
            node.visited = true;
            if (node.right) {
                stack.push(node.right);
            }
            stack.push(node);
            if (node.left) {
                stack.push(node.left);
            }
        }
    }

    return result;
};

var isValidBST = function(root) {
    if (root === null) {
        return true;
    }

    var arr = inorderTraversal(root);

    for (var i = 1, len = arr.length; i < len; i++) {
        if (arr[i - 1] >= arr[i]) {
            return false;
        }
    }

    return true;
};


