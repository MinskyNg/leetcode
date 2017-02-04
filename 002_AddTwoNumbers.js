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
var addTwoNumbers = function(l1, l2) {
    var result = [],
        carry = 0;

    do {
        if (l1) {
            carry += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            carry += l2.val;
            l2 = l2.next;
        }

        result.push(carry % 10);
        carry = (carry > 9) ? 1 :0;
    }
    while (l1 || l2 || carry);

    return result;
}
