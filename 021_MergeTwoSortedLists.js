/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var tmp = new ListNode(0),
        result = tmp;

    while (l1 && l2) {
        if (l1.val > l2.val) {
            tmp.next = l2;
            l2 = l2.next;
        } else {
            tmp.next = l1
            l1 = l1.next;
        }
        tmp = tmp.next;
    }

    if (l1) {
        tmp.next = l1;
    } else if (l2) {
        tmp.next = l2;
    }

    return result.next;
};
