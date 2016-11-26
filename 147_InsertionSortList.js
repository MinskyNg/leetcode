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
var insertionSortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    var result = new ListNode(0),
        tmp1 = head,
        tmp2 = head.next,
        tmp1Pre = result,
        tmp2Pre = head;
    tmp1Pre.next = tmp1;


    while (tmp2 !== null) {
        while (tmp1 !== tmp2) {
            if (tmp1.val >= tmp2.val) {
                tmp1Pre.next = tmp2;
                tmp2Pre.next = tmp2.next;
                tmp2.next = tmp1;
                break;
            }
            tmp1Pre = tmp1;
            tmp1 = tmp1.next;
        }
        if (tmp1 === tmp2) {
            tmp2Pre = tmp2;
            tmp2 = tmp2.next;
        } else {
            tmp2 = tmp2Pre.next;
        }
        tmp1Pre = result;
        tmp1 = result.next;
        tmp1Pre.next = tmp1;
    }

    return result.next;
};
