/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (root === null) {
        return;
    }

    var queue = [root],
        pre = {};
    pre.deep = -1;
    root.deep = 0;

    while (queue.length) {
        var node = queue.shift();
        var deep = node.deep;

        if (pre.deep === deep) {
            pre.next = node;
        }


        if (node.left) {
            node.left.deep = deep + 1;
            queue.push(node.left);
        }

        if (node.right) {
            node.right.deep = deep + 1;
            queue.push(node.right);
        }

        pre = node;
    }

    return;
};
