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
var sortList = function(head) {
    if (head === null) {
        return head;
    }

    var length = 0,
        tmp = head;

    while (tmp !== null) {
        tmp = tmp.next;
        length++;
    }

    var sort = function(len) {
        if (len === 1) {
            var tmp = head;
            head = head.next;
            tmp.next = null;
            return tmp;
        }

        return merge(sort(parseInt(len / 2)), sort(len - parseInt(len / 2)));
    };

    var merge = function(p1, p2) {
        var tmp1 = new ListNode(0),
            tmp2 = tmp1;

        while (p1 && p2) {
            if (p1.val > p2.val) {
                tmp1.next = p2;
                p2 = p2.next;
            } else {
                tmp1.next = p1;
                p1 = p1.next;
            }
            tmp1 = tmp1.next;
        }

        if (p1) {
            tmp1.next = p1;
            p1 = p1.next;
            tmp1 = tmp1.next;
        }

        if (p2) {
            tmp1.next = p2;
            p2 = p2.next;
            tmp1 = tmp1.next;
        }

        return tmp2.next;
    };

    return sort(length);
};
