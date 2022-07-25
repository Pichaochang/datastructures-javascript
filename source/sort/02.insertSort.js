import main from "./_test.js";
// 冒泡排序
function insertSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    for (let j = i - 1; j <= i && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1);
    }
  }
}
function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
// test code
main(insertSort, 100000);
