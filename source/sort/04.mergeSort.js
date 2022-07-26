import main from "./_test.js";
// 分而治之，将数组分若干组，将每个组进行排序
var mergeSort = function (arr, left, right) {
  if (left >= right ) {
    return false;
  }
  var mid = left + ((right - left) >> 1);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
};
var merge = function (arr, left, mid, right) {
  var help = [];
  var i = 0;
  var p1 = left;
  var p2 = mid + 1;
  while (p1 <= mid && p2 <= right) {
    arr[p1] > arr[p2] ? help.push(arr[p2++]) : help.push(arr[p1++]);
    i++;
  }
  while (p1 <= mid) {
    help[i++] = arr[p1++];
  }
  while (p2 <= right) {
    help[i++] = arr[p2++];
  }
  for (let index = 0; index < help.length; index++) {
    arr[left + index] = help[index];
  }
};
// test code
main(mergeSort);
