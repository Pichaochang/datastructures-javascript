class Heap {
  constructor(_value, compareFn) {
    this._heap = _value || []
    this._compare = compareFn || ((a, b) => { return b - a }) // 默认是从大到小
    if (_value.length) {
      this.fix()
    }
  }
  offer (val) {
    this._heap.push(val)
    // 重建根堆
    this._heapifyUp(this.size() - 1)
    return this
  }
  poll() {
    if (!this.size()) {
      throw 'empty'
    }
    this._swap(0, this.size() - 1)
    const ans = this._heap.pop();
    this._heapifyDown(0);
    return ans;
  }
  top() {
    return this._heap[0]
  }
  fix() {
    for (let i = 0; i < this.size(); i += 1) {
      this._heapifyUp(i);
    }
    return this;
  }
  toArray(){
    return this.cloneHeap()._heapify().reverse()
  }
  cloneHeap() {
    return new Heap(this._heap.slice(), this._compare);
  }
  size() {
    return this._heap.length
  }
  _heapifyUp(index) {
    let childrenIndex = index
    let parentIndex = Math.floor((index - 1) / 2)
    while(this._shouldSwap(parentIndex, childrenIndex)) {
      this._swap(parentIndex, childrenIndex)
      childrenIndex = parentIndex
      parentIndex = Math.floor((childrenIndex - 1) / 2)
    }
  }
  _heapifyDown(startIndex) {
    let parentIndex = startIndex;
    let childIndex = this._compareChildrenOf(parentIndex);

     while (this._shouldSwap(parentIndex, childIndex)) {
      this._swap(parentIndex, childIndex);
      parentIndex = childIndex;
      childIndex = this._compareChildrenOf(parentIndex);
    }
  }
  _heapify() {
    for (let i = this.size() - 1; i > 0; i -= 1) {
      this._swap(0, i);
      this._heapifyDownUntil(i);
    }
    return this._heap;
  }
  _heapifyDownUntil(index) {
    let parentIndex = 0;
    let leftChildIndex = 1;
    let rightChildIndex = 2;
    let childIndex;

    while (leftChildIndex < index) {
      childIndex = this._compareChildrenBefore(
        index,
        leftChildIndex,
        rightChildIndex
      );

      if (this._shouldSwap(parentIndex, childIndex)) {
        this._swap(parentIndex, childIndex);
      }

      parentIndex = childIndex;
      leftChildIndex = (parentIndex * 2) + 1;
      rightChildIndex = (parentIndex * 2) + 2;
    }
  }
  _compareChildrenBefore(index, leftChildIndex, rightChildIndex) {
    const compare = this._compareAt(rightChildIndex, leftChildIndex);

    if (compare <= 0 && rightChildIndex < index) {
      return rightChildIndex;
    }

    return leftChildIndex;
  }
  _shouldSwap(parentIndex, childIndex) {
    if (parentIndex >= this.size() || parentIndex < 0) {
      return false
    }
    if (childIndex >= this.size() || childIndex < 0) {
      return false
    }
    return this._compareAt(parentIndex, childIndex) > 0
  }
  _compareChildrenOf(parentIndex) {
    const isHasLeftChild = this._hasLeftChild(parentIndex)
    const isHasRightChild = this._hasRightChild(parentIndex)
    if (!isHasLeftChild && !isHasRightChild) {
      return -1;
    }

    const leftChildIndex = (parentIndex * 2) + 1;
    const rightChildIndex = (parentIndex * 2) + 2;

    if (!isHasLeftChild) {
      return rightChildIndex;
    }

    if (!isHasRightChild) {
      return leftChildIndex;
    }
    
    const compare = this._compareAt(leftChildIndex, rightChildIndex);
    return compare > 0 ? rightChildIndex : leftChildIndex;
  }
  _compareAt(parentIndex, childIndex) {
    return this._compare(this._heap[parentIndex], this._heap[childIndex])
  }
  _swap(parentIndex, childIndex) {
    const temp = this._heap[parentIndex]
    this._heap[parentIndex] = this._heap[childIndex]
    this._heap[childIndex] = temp
  }
   _hasLeftChild(parentIndex) {
    const leftChildIndex = (parentIndex * 2) + 1;
    return leftChildIndex < this.size();
  }
  _hasRightChild(parentIndex) {
    const rightChildIndex = (parentIndex * 2) + 2;
    return rightChildIndex < this.size();
  }

}
const heap = new Heap(
  [
    {
      priority: '21'
    },
    {
      priority: '1'
    },
    {
      priority: '3'
    },
    {
      priority: '214'
    },
    {
      priority: '21124'
    },
    {
      priority: '214'
    }
  ],
  function(a,b) {
    return b['priority'] - a['priority']
  }
)
heap.offer({priority: '2133'})
heap.poll()
console.log(heap._heap)
console.log(heap.toArray())
