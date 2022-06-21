function BFS (node) {
  if (node == null) {
    return
  }
  var queue = []
  var set = new Set()
  queue.push(node)
  set.add(node)
  while(!queue.length) {
    const currNode = queue.shift()
    // 打印节点
    currNode.nexts.forEach(nextNode => {
      if (!set.has(nextNode)) {
        set.add(nextNode)
        queue.push(nextNode)
      }
    });
  }
}