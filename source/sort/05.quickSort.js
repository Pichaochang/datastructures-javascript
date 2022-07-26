import main from "./_test.js";
// 基本思想

// 1.选定pivot 中心轴

// 2.将大于pivot 的数字放在pivot的右边

// 3将小于pivot 的数字放在pivot的左边

// 4.分别对以上操作重复
function qucikSort(arr, left, right) {
  if (left < right) {
    swap(arr, parseInt(Math.random() * (right - left + 1)), right);
    const p = partition(arr, left, right);
    qucikSort(arr, left, p[0] - 1);
    qucikSort(arr, p[1] + 1, right);
  }
}
var partition = function (arr, left, right) {
  let less = left - 1;
  let more = right;
  while (left < more) {
    if (arr[left] < arr[right]) {
      swap(arr, ++less, left++);
    } else if (arr[left] > arr[right]) {
      swap(arr, --more, left);
    } else {
      left++;
    }
  }
  swap(arr, more, right);
  return [less + 1, more];
};
function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
// test code
main(qucikSort);
