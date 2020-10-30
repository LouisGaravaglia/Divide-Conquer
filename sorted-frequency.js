
// sortedFrequency

// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:

// Time Complexity: O(log N)

// Examples:

// sortedFrequency([1,1,2,2,2,2,3],2) // 4

// sortedFrequency([1,1,2,2,2,2,3],3) // 1

// sortedFrequency([1,1,1,2,2,2 2 2,3],1) // 4

// sortedFrequency([1,1,2,2,2,2,3],4) // -1


function sortedFrequency(arr, num) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let firstIdx;
  let lastIdx;

  if (arr[rightIdx] < num) return -1; 
  if (arr[0] > num) return -1; 
  if (arr[0] === num) firstIdx = 0; 
  if (arr[rightIdx] === num) lastIdx = rightIdx; 
  if (firstIdx && lastIdx) return arr.length;

  while(leftIdx < rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx)/2);
    let middleVal = arr[middleIdx];

    if (((middleVal === num && arr[middleIdx - 1] === num) && !Number.isInteger(firstIdx)) || (middleVal > num && arr[middleIdx - 1] > num)) {
      rightIdx = middleIdx - 1;
    } else if ((middleVal < num && arr[middleIdx + 1] < num) || ((middleVal === num && arr[middleIdx + 1] === num) && firstIdx)) {
      leftIdx = middleIdx + 1;
    } else if (middleVal === num && arr[middleIdx - 1] < num) {
      firstIdx = middleIdx;
      if ((firstIdx || firstIdx === 0) && (lastIdx || lastIdx === 0)) return (lastIdx - firstIdx) + 1;
      leftIdx = middleIdx;
    } else if (middleVal > num && arr[middleIdx - 1] === num) {
      lastIdx = middleIdx - 1;
      if ((firstIdx || firstIdx === 0) && (lastIdx || lastIdx === 0)) return (lastIdx - firstIdx) + 1;
      rightIdx = middleIdx - 1;
    } else if (middleVal === num && arr[middleIdx + 1] > num) {
      lastIdx = middleIdx;
      if ((firstIdx || firstIdx === 0) && (lastIdx || lastIdx === 0)) return (lastIdx - firstIdx) + 1;
      rightIdx = middleIdx;
    } else if (middleVal < num && arr[middleIdx + 1] === num) {
      firstIdx = middleIdx + 1;
      if ((firstIdx || firstIdx === 0) && (lastIdx || lastIdx === 0)) return (lastIdx - firstIdx) + 1;
      leftIdx = middleIdx + 1;
      rightIdx = arr.length - 1;
    } 

  }

}

module.exports = sortedFrequency