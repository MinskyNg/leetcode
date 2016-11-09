/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

var sortedListToBST = function(head) {
    if (head === null) {
        return null;
    }

    var cur = head,
        len = -1;

    while (cur) {
        cur = cur.next;
        len++;
    }

    var buildTree = function(start, end) {
        if (start > end) {
            return null;
        }

        var mid = (start + end) >> 1;

        var left = buildTree(start, mid - 1);
        var root = new TreeNode(head.val);
        root.left = left;
        head = head.next;
        root.right = buildTree(mid + 1, end);

        return root;
    };

    return buildTree(0, len);
};
