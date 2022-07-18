class Edge {
    constructor(weight, from, to) {
			this.weight = weight;
			this.from = from;
			this.to = to;
    }
}
class Node {
	constructor(value) {
		this.value = value;
		this.in = 0;
		this.out = 0;
		this.nexts = [];
		this.edges = [];
	}
}
class Graph {
	constructor(value) {
		this.nodes = new Map();
		this.edges = new Set();
	}
}
// matrix[ from, to, 边权 ]
class createGraph {
	constructor(matrix) {
		var graph = new Graph();
		for (var i = 0; i < matrix.length; i++) {

			var from = matrix[i][0];
			var to = matrix[i][1];
			var weight = matrix[i][2];

			if (!graph.nodes.has(from)) {
				graph.nodes.set(from, new Node(from));
			}
			if (!graph.nodes.has(to)) {
				graph.nodes.set(to, new Node(to));
			}

			var fromNode = graph.nodes.get(from);
			var toNode = graph.nodes.get(to);

			var newEdge = new Edge(weight, fromNode, toNode);

			fromNode.nexts.push(toNode);
			fromNode.out++;
			toNode.in++;
			
			fromNode.edges.add(newEdge);
			graph.edges.add(newEdge);
		}
		return graph;
	}
}