/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var result = new ListNode(0),
        mHead = result,
        len = n - m + 1;
    result.next = head;

    while (--m) {
        mHead = mHead.next;
    }

    var resver = new ListNode(0),
        tmp = mHead.next;
    while (len--) {
        var tmpNode = resver.next;
        resver.next = tmp;
        tmp = tmp.next;
        resver.next.next = tmpNode;
    }

    mHead.next.next = tmp;
    mHead.next = resver.next;

    return result.next;
};
