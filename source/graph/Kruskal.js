// 了解并查集
import { DisjointSets } from './unionFind.js'
import { Heap } from '../heap.js'
function Kruskal(graph) {
  const unionFind = new DisjointSets(graph.nodes.values())
  const priorityQueue = new Heap()
  graph.edges.forEach(edge => {
    priorityQueue.offer(edge);
  });

}