/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }

    if (headA === headB) {
        return headA;
    }

    var len,
        lenA = 1,
        lenB = 1,
        tailA = headA,
        tailB = headB;

    while (tailA.next) {
        tailA = tailA.next;
        lenA++;
    }

    while (tailB.next) {
        tailB = tailB.next;
        lenB++;
    }

    if (tailA !== tailB) {
        return null;
    }

    if (lenA > lenB) {
        len = lenA -lenB;
        while (len--) {
            headA = headA.next;
        }
    } else {
        len = lenB -lenA;
        while (len--) {
            headB = headB.next;
        }
    }

    while (headA) {
        if (headA === headB) {
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }
};
