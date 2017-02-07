/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var result = new ListNode(0),
        point = result,
        tmpPoint,
        tmpNode;

    while (head !== null) {
        tmpPoint = new ListNode(0);
        for (var i = 0; i < k; i++) {
            if (head !== null) {
                tmpNode = head.next;
                head.next = tmpPoint.next;
                tmpPoint.next = head;
                head = tmpNode;
            } else {
                head = tmpPoint.next
                while (head !== null) {
                    tmpNode = head.next;
                    head.next = point.next;
                    point.next = head;
                    head = tmpNode;
                }
                return result.next;
            }
        }
        point.next = tmpPoint.next;
        while (point.next !== null) {
            point = point.next;
        }
    }

    return result.next;
};
