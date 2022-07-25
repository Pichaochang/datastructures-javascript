
import main from './_test.js'
// 冒泡排序
function selectionSort(arr) {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    let min = i
    for (let j = i + 1; j < length; j++) {
      if(arr[min] > arr[j]) {
        swap(arr, min, j)
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
main(selectionSort)

