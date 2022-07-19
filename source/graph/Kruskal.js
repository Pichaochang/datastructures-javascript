// 了解并查集
import { DisjointSets } from './unionFind.js'
import { Heap } from '../heap.js'
function Kruskal(graph) {
  const unionFind = new DisjointSets(graph.nodes.values())
  const priorityQueue = new Heap((a, b) => { return a.weight - b.weight })
  graph.edges.forEach(edge => {
    priorityQueue.offer(edge);
  });
  const result = new Set()
  while(!priorityQueue.size()) {
    const edge = priorityQueue.poll()
    if (!unionFind.isSameSet(edge.from, edge.to)) {
      result.add(edge);
      unionFind.union(edge.from, edge.to);
    }
  }
  return result;
}