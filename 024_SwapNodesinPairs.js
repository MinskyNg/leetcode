/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    var result = new ListNode(0),
        point = result;

    while (head !== null && head.next !== null) {
        var tmp = head.next;
        head.next = head.next.next;
        tmp.next = head;
        point.next = tmp;
        point = head;
        head = head.next;
    }

    return result.next;
};
