function topologySort(graph){
  const inMap = new Map()
  const zeroInQueue = []
  const result = []

  graph.forEach(node => {
    inMap.set(node, node.in)
    if (node.in == 0) {
      zeroInQueue.push(node);
    }
  });
  
  while(zeroInQueue.length) {
    const cur = zeroInQueue.shift()
    result.push(cur);
    cur.nexts.forEach(next => {
      inMap.set(next, inMap.get(next) - 1)
      if (inMap.get(next) == 0) {
        zeroInQueue.push(node);
        result.push(next);
      }
    });
  }

  return result
}