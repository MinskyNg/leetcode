/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var tmp1 = new ListNode(0),
        tmp2 = new ListNode(0);

    tmp1.next = head;
    tmp2.next = head;

    while (n > 0) {
        tmp1 = tmp1.next;
        n--;
    }

    if (tmp1.next === null) {
        head = head.next;
    } else {
        while (tmp1.next) {
            tmp1 = tmp1.next;
            tmp2 = tmp2.next;
        }
        tmp2.next = tmp2.next.next;
    }

    return head
};
