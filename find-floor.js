
// findFloor

// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1

// Constraints

// Time Complexity: O(log N)


function findFloor(arr, num) {
  var start = 0;
  var end = arr.length - 1;

  if (arr.length === 0) return -1;
  if (num < arr[start]) return -1;
  if (num >= arr[end]) return arr[end];

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] <= num && arr[mid + 1] > num) {
      return arr[mid];
    } else if (num < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    };
  };

  return -1;

}

module.exports = findFloor