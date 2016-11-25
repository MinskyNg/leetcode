/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    var visited = {};

    var dfs = function(node) {
        var newNode = visited[node.label] || new RandomListNode(node.label);
        visited[node.label] = newNode;

        newNode.next = node.next === null ? node.next : visited[node.next.label] || dfs(node.next);
        newNode.random = node.random === null ? node.random : visited[node.random.label] || dfs(node.random);

        return newNode;
    };

    if (head === null) {
        return head;
    } else {
        return dfs(head);
    }
};
