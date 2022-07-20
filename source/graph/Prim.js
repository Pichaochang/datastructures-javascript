import { Heap } from '../heap.js'
function prim (graph) {
  const priorityQueue = new Heap((a, b) => { return a.weight - b.weight })
  const set = new Set()
  const result = new Set()
  for (const node of graph.nodes.values()) {
    if(!set.has(node)){
      set.add(node)
      for (const edge of node.edges) {
        priorityQueue.offer(edge);
      }
      while(!priorityQueue.size()) {
        const edge = priorityQueue.poll()
        const toNode = edge.to
        if(!set.has(toNode)){
          set.add(toNode)
          result.add(edge);

          for (const nextEdge of node.edges) {
            priorityQueue.offer(nextEdge);
          }
        }
      }
    }
  }
  return result
}