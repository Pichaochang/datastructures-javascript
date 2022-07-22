// test 用计数器和比较器校验结果
export default function main(fn) {
  const testTime = 100;
  const maxSize = 100;
  const maxValue = 100;
  let succeed = true;
  for (let i = 0; i < testTime; i++) {
    const arr1 = generateRandomArray(maxSize, maxValue);
    const arr2 = copyArray(arr1);
    fn(arr1);
    comparator(arr2);
    if (!isEqual(arr1, arr2)) {
      succeed = false;
      break;
    }
  }
  console.log(succeed ? "Nice!" : "Fucking fucked!")
  const arr = generateRandomArray(maxSize, maxValue)
  fn(arr);
  printArray(arr);
}
function generateRandomArray(maxSize, maxValue) {
    const arr = new Array(parseInt((maxSize + 1) * Math.random()));
		for (let i = 0; i < arr.length; i++) {
			arr[i] = parseInt(((maxValue + 1) * Math.random()) - (maxValue * Math.random()));
		}
		return arr;
}
function comparator(arr) {
  arr.sort((a,b) => a - b);
}
function isEqual( arr1, arr2) {
  if ((arr1 == null && arr2 != null) || (arr1 != null && arr2 == null)) {
    return false;
  }
  if (arr1 == null && arr2 == null) {
    return true;
  }
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}
function copyArray(arr) {
		if (arr == null) {
			return null;
		}
		const res = []
		for (let i = 0; i < arr.length; i++) {
			res[i] = arr[i];
		}
		return res;
}
function printArray(arr){
  console.log(arr)
}