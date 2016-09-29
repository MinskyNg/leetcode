/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null || head.next === null || k <= 0) {
        return head;
    }

    var tmp1 = head,
        tmp2 = head,
        len = 1
        i = 0;

    while (tmp1.next) {
        tmp1 = tmp1.next;
        len++;
    }

    k = k % len;
    if (k === 0) {
        return head;
    }

    for (len = len - k - 1; i < len; i++) {
        tmp2 = tmp2.next;
    }

    var result = tmp2.next;
    tmp2.next = null;
    tmp1.next = head;

    return result;
};
