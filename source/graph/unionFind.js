export class DisjointSets{
  constructor(nodes){
    this.fatherMap = new Map()
    this.rankMap = new Map()
    this.makeSets(nodes)
  }
  
  makeSets(){
    for (let index = 0; index < nodes.length; index++) {
      const node = nodes[index];
      fatherMap.set(node, node)
      rankMap.set(node, 1)
    }
  }
  find(node) {
    const faththNode = this.fatherMap.get(node)
    if (faththNode != node) {
      faththNode = this.find(faththNode)
    }
    this.fatherMap.set(node, faththNode)
    return faththNode
  }

  union(firstNode, secondNode) {
    if (!firstNode || !secondNode) {
      return
    }
    const firstNodeMap = this.fatherMap.get(firstNode)
    const secontNodeMap = this.fatherMap.get(secondNode)

    if (firstNodeMap != secontNodeMap) {
      const firstNodeRank = this.rankMap.get(firstNode)
      const secontNodeRank = this.rankMap.get(secondNode)

      if (firstNodeRank <= secontNodeMap) {
        this.fatherMap.set(firstNodeRank, secontNodeMap)
        this.rankMap.set(secontNodeMap, firstNodeRank + secontNodeRank)
      } else {
        this.fatherMap.set(secontNodeMap, firstNodeMap)
        this.rankMap.set(firstNodeRank, firstNodeRank + secontNodeRank)
      }
    }
  }
  isSameSet(a,b) {
    return this.find(a) === this.find(b)
  }
}