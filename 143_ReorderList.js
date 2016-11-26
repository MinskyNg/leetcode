/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (head === null || head.next === null || head.next.next === null) {
        return;
    }


    var tmp = head,
        length = 1;
    while (tmp.next !== null) {
        tmp = tmp.next;
        length++;
    }


    var half = head;
    length = ~~(length / 2) - 1;
    while (length--) {
        half = half.next;
    }


    tmp = half;
    half = half.next;
    tmp.next = null;
    var reverse = new ListNode(0);
    while (half) {
        tmp = half.next;
        half.next = reverse.next;
        reverse.next = half;
        half = tmp;
    }
    reverse = reverse.next;


    while (head.next && reverse) {
        tmp = reverse.next;
        reverse.next = head.next;
        head.next = reverse;
        head = reverse.next;
        reverse = tmp;
    }

    if (reverse) {
        head.next = reverse;
    }
};
