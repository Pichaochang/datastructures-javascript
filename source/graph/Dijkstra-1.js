function Dijkstra(head) {
  const distanceMap = new Map()
  distanceMap.add(head, 0)
  const selectedNodes = new Set()
  // 初始加入head节点
  let minNode = getMinDistanceAndUnselectedNode(distanceMap, selectedNodes)

  while(minNode != null){
    const distance = distanceMap.get(minNode)
    // 遍历最小节点的边
    for(let edge of minNode.edges) {
      const toNode = edge.to
      if (!distanceMap.has(toNode)){
        distanceMap.set(toNode, distance + edge.weight);
      }
      distanceMap.set(edge.to, Math.min(distanceMap.get(toNode), distance + edge.weight));
    }
    selectedNodes.add(minNode);
		minNode = getMinDistanceAndUnselectedNode(distanceMap, selectedNodes);
  }
  return distanceMap;
}
function getMinDistanceAndUnselectedNode(distanceMap, touchedNodes){
  let minNode = null
  let minDistance = Infinity
  // 遍历distanceMap

  for(let [node, distance] of distanceMap.entries()) {
    if (!touchedNodes.has(node) && distance < minDistance){
      minNode = node;
			minDistance = distance;
    }
  }
  return minNode;
}
// 12 9 15
// selectedNodes  0 1 7
// distanceMap    
// 0        1        2        3         4       5       6     7       8
// 0        4        12       --       --       --      9     8       15