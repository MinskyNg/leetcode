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
var isSymmetric = function(root) {
    if (root === null) {
        return true;
    }

    return ifSymmetric(root.left, root.right);
};


function ifSymmetric(tree1, tree2) {
    if (tree1 === null && tree2 === null) {
        return true;
    }

    if (tree1 === null || tree2 === null) {
        return false;
    }

    if (tree1.val !== tree2.val) {
        return false;
    }

    return ifSymmetric(tree1.left, tree2.right) && ifSymmetric(tree1.right, tree2.left);
}



/**
 * other solution
 */
// var inorderTraversal = function(root) {
//     if (root === null) {
//         return [];
//     }

//     var result = [],
//         stack = [root];

//     while (stack.length) {
//         var node = stack.pop();
//         if (node.visited === true) {
//             result.push(node.val);
//         } else {
//             node.visited = true;
//             if (node.right) {
//                 stack.push(node.right);
//             }
//             stack.push(node);
//             if (node.left) {
//                 stack.push(node.left);
//             }
//         }
//     }

//     return result;
// };


// var isSymmetric = function(root) {
//     if (root === null || (root.left === null && root.right === null)) {
//         return true;
//     }

//     if (root.left === null || root.right === null || root.left.val !== root.right.val) {
//         return false;
//     }

//     var left = inorderTraversal(root.left);
//     var right = inorderTraversal(root.right);

//     if (left.length !== right.length) {
//         return false;
//     }

//     for (var i = 0, len = left.length - 1; i <= len; i++) {
//         if (left[i] !== right[len - i]) {
//             return false;
//         }
//     }

//     return true;
// };
