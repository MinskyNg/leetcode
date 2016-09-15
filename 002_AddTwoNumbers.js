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
        carry = 0,
        sum;

    do {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = (sum > 9) ? 1 : 0;
        result.push(sum % 10);
        l1 = l1 ? l1.next : 0;
        l2 = l2 ? l2.next : 0;
    }
    while (l1 || l2 || carry);

    return result;
}
