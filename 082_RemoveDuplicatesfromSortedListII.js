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
    var result = new ListNode(0),
        tmp1 = result;
    result.next = head;

    while (head && head.next) {
        if (head.val === head.next.val) {
            var tmp2 = head;
            head = head.next;
            while (head.next && head.val === head.next.val) {
                head = head.next;
            }
            head = head.next;
            if (head) {
                tmp2.val = head.val;
                tmp2.next = head.next;
                head = tmp2;
            }
            tmp1.next = head;
        } else {
            tmp1 = head;
            head = head.next;
        }
    }

    return result.next;
};
