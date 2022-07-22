
import main from './_test.js'
// 冒泡排序
function heapSort(arr) {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j <= length - 1 - i; j++) {
      if (arr[j] > arr[j+1]){
        swap(arr, j, j+1)
      }
    }
  }
}
function swap(arr, index1, index2) {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}
// test code
main(bubbleSort)

