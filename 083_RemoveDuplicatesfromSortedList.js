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
var deleteDuplicates = function(head) {
    var result = head;

    while (head && head.next) {
        if (head.val === head.next.val) {
            var tmp = head;
            head = head.next;
            while (head.next && head.val === head.next.val) {
                head = head.next;
            }
            head = head.next;
            tmp.next = head;
        } else {
            head = head.next;
        }
    }

    return result;
};
