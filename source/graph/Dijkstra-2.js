class NodeRecord {
  constructor(node, distance) {
    this.node = node;
    this.distance = distance;
  }
}
class NodeHeap {
  constructor() {
    this.node = [];
    this.heapIndexMap = new Map();
    this.distanceMap = new Map();
    this.size = 0;
  }
  addOrUpdateOrIgnore(node, distance) {
    const { heapIndexMap, distanceMap, nodes, size } = this;

    if (inHeap(node)) {
      this.distanceMap.set(
        node,
        Math.min(this.distanceMap.get(node), distance)
      );
      this.insertHeapify(node, heapIndexMap.get(node));
    }

    if (!this.isEntered(node)) {
      nodes[size] = node;
      heapIndexMap.set(node, size);
      distanceMap.set(node, distance);
      this.insertHeapify(node, size++);
    }
  }
  pop() {
    const { heapIndexMap, distanceMap, nodes, size } = this;
    const nodeRecord = new NodeRecord(nodes[0], distanceMap.get(nodes[0]));
    this.swap(0, size - 1);
    heapIndexMap.put(nodes[size - 1], -1);
    distanceMap.delete(nodes[size - 1]);
    nodes[size - 1] = null;
    this.heapify(0, --size);
    
    this.size = size
    return nodeRecord;
  }
  insertHeapify(node, index) {
    const { distanceMap, nodes } = this;
    while (distanceMap.get(nodes[index]) < distanceMap.get(nodes[(index - 1) / 2])) {
      swap(index, (index - 1) / 2);
      index = (index - 1) / 2;
    }
  }
  heapify(index, size) {
    const { distanceMap, nodes } = this;
    const left = index * 2 + 1;
			while (left < size) {
				let smallest = left + 1 < size && distanceMap.get(nodes[left + 1]) < distanceMap.get(nodes[left])
						? left + 1 : left;
				smallest = distanceMap.get(nodes[smallest]) < distanceMap.get(nodes[index]) ? smallest : index;
				if (smallest == index) {
					break;
				}
				this.swap(smallest, index);
				index = smallest;
				left = index * 2 + 1;
			}
  }
  inHeap(node) {
    return this.isEntered(node) && this.heapIndexMap.get(node) != -1;
  }
  isEntered(node) {
    return this.heapIndexMap.has(node);
  }
  swap(index1, index2) {
    const { heapIndexMap, nodes } = this;
    heapIndexMap.set(nodes[index1], index2);
    heapIndexMap.set(nodes[index2], index1);
    const tmp = nodes[index1];
    nodes[index1] = nodes[index2];
    nodes[index2] = tmp;
  }
  isEmpty() {
    return this.size == 0;
  }
}
function Dijkstra(head) {
  const nodeHeap = new NodeHeap(size);
  nodeHeap.addOrUpdateOrIgnore(head, 0);
  const result = new Map()
  while(!nodeHeap.isEmpty()) {
    const record = nodeHeap.pop()
    const cur = record.node
    const distance = record.distance
    for (const edge of cur.edges) {
      nodeHeap.addOrUpdateOrIgnore(edge.to, edge.weight + distance);
    }
    result.set(cur, distance);
  }
  return result;
}
