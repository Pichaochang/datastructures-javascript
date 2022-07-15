function BFS (node) {
  if (node == null) {
    return
  }
  const ans = [] // 返回的结果
  var stack = []
  var set = new Set()

  stack.push(node)
  set.add(node)
  ans.push(node)
  
  while(!stack.length) {
    const currNode = stack.pop()
    const len = currNode.next.length
    for (let index = 0; index < len; index++) {
      const item = stack[index];
      if(!set.has(item)) {
        stack.push(item)
        set.add(item)
        ans.push(item)
        break
      }
    }
  }
}