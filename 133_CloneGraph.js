/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    var visited = {};

    var dfs = function(node) {
        var newNode = visited[node.label] || new UndirectedGraphNode(node.label);
        visited[node.label] = newNode;

        for (var i = 0, len = node.neighbors.length; i < len; i++) {
            newNode.neighbors.push(visited[node.neighbors[i].label] || dfs(node.neighbors[i]));
        }

        return newNode;
    };

    if (graph === null) {
        return graph;
    } else {
        return dfs(graph);
    }
};
