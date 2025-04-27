const recursiveBinarySearch = (
  arr,
  target,
  start = 0,
  end = arr.length - 1
) => {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return recursiveBinarySearch(arr, target, mid + 1, end);
  } else {
    return recursiveBinarySearch(arr, target, start, mid - 1);
  }
};

const arr2 = [2, 4, 7, 10, 23, 38, 44, 55];
const target2 = 5;

const result2 = recursiveBinarySearch(arr2, target2);

if (result2 !== -1) {
  console.log(`Element found at index ${result2}`);
} else {
  console.log("Element not found");
}
