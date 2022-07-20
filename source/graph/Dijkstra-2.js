function Dijkstra(head) {

}

class NodeRecord{
  constructor(node, distance){
    this.node = node;
		this.distance = distance;
  }
}
class NodeHeap {
  constructor() {
    this.node = []
    this.heapIndexMap = new Map()
    this.distanceMap = new Map()
    this.size = 0
  }
  isEmpty() {
    return this.size == 0;
  }
  addOrUpdateOrIgnore(node, distance) {

  }
  insertHeapify() {

  }
  heapify() {

  }
  inHeap(node) {
    return this.isEntered(node) && this.heapIndexMap.get(node) != -1;
  }
  isEntered(node) {
    return this.heapIndexMap.has(node);
  }
  swap(index1, index2) {
    const { heapIndexMap, nodes } = this
    heapIndexMap.set(nodes[index1], index2);
    heapIndexMap.set(nodes[index2], index1);
    const tmp = nodes[index1];
    nodes[index1] = nodes[index2];
    nodes[index2] = tmp;
  }
}
