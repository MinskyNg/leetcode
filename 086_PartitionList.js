/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var result = new ListNode(0),
        tmp = result,
        tail = head,
        tmp1;
    result.next = head;

    while (tail && tail.next) {
        tail = tail.next;
    }

    while (tmp.next) {
        if (tmp.next.val >= x) {
            if (!tmp1) {
                tmp1 = tmp.next;
            } else if (tmp1 === tmp.next) {
                break;
            }
            tail.next = tmp.next;
            tail = tail.next;
            tmp.next = tmp.next.next;
            tail.next = null;
        } else {
            tmp = tmp.next;
        }
    }

    return result.next;
};
