/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var len = lists.length;

    if (len <= 1) {
        return lists[0] || null;
    }

    len = len / 2;
    return mergeTwoLists(mergeKLists(lists.slice(0, len)), mergeKLists(lists.slice(len)));
};


var mergeTwoLists = function(l1, l2) {
    var tmp = new ListNode(0),
        result = tmp;


    while (l1 && l2) {
        if (l1.val > l2.val) {
            tmp.next = l2;
            l2 = l2.next;
            tmp = tmp.next;
        } else {
            tmp.next = l1
            l1 = l1.next;
            tmp = tmp.next;
        }
    }

    if (l1) {
        tmp.next = l1;
    } else if (l2) {
        tmp.next = l2;
    }

    return result.next;
};
