// RECURSION AND DIVIDE AND CONQUOR

// EXERCISES
// 4.1
// Write out the code for the earlier sum function.
const arr1 = [2, 4, 5, 7, 9];

function ex41(arr) {
  if (arr.length <= 1) {
    return arr[0];
  }
  return arr[0] + ex41(arr.slice(1));
}

// console.log(ex41(arr1));

// 4.2
// Write a recursive function to count the number of items in a list.
const arr2 = [2, 4, 5, 7, 9, 234, 2231, 3144];

function ex42(arr) {
  if (arr.length <= 1) {
    return 1;
  }
  arr.splice(-1);
  return 1 + ex42(arr);
}

// console.log(ex42(arr2));

// 4.3
// Find the maximum number in a list.
// function ex43 (list) {
//   if (list.length === 2) {
//     return list[0] > list[1] ? list[0] : list[1];
//   }
//   const subMax = Math.max(list.slice(1));
//   return list[0] > subMax ? list[0] : subMax;
// }

// console.log(ex43([2, 4, 5, 7, 9, 234, 2231, 144]));

// 4.4
// Remember binary search from chapter 1? It’s a divide-and-conquer algorithm, too. Can you come up with the base case and recursive case for binary search?

function ex44(arr, item) {
  const min = 0;
  const max = arr.length - 1;

  console.log(min, max);

  // if (item > )
}

// QUICKSORT

function quicksort(array) {
  if (array.length < 2) {
    return array;
  } else {
    const pivot = array[0];
    const less = array.filter(num => num < pivot);
    const greater = array.filter(num => num > pivot);

    return [...quicksort(less), pivot, ...quicksort(greater)];
  }
}

// console.log(quicksort([4,7,11,2,6]));

// ex412

function sum2(arr) {
  // base
  if (arr.length <= 1) {
    return arr[0];
  } else {
    // recursive
    return arr[0] + sum2(arr.slice(1));
  }
}

// console.log(sum2([2, 4, 6, 15]));

// ex422 - Write a recursive function to count the number of items in a list.

function listCount2(arr) {
  // base
  if (arr.length === 0) {
    return 0;
    // } else if (arr.length === 1) {
    //   return 1;
    // recursive
  } else {
    return 1 + listCount2(arr.splice(1));
  }
}

// console.log(listCount2([1, 2, 5, 6, 77]));
// console.log(listCount2([1, 4, 3, 5, 6, 77, 345]));

// 4.3
// Find the maximum number in a list... recursively!!!!

function maxNum(list) {
  // base
  if (list.length === 0) {
    return null;
  } else if (list.length === 1) {
    return list[0];
  }
  // recursive
  list[0] < list[1] ? list.splice(0, 1) : list.splice(1, 1);
  return maxNum(list);
}

const arr431 = [2, 5, 77];
const arr432 = [2, 5, 77, 45, 4, 555, 1, 78];

// console.log(maxNum(arr432));

// ex442 - recursive binary search

// function binarySearch(arr, val) {
//   let min = 0;
//   let max = arr.length - 1;

//   while (min <= max) {
//     let mid = Math.floor((min + max) / 2);
//     let curVal = arr[mid];

//     if (curVal === val) {
//       return mid;
//     }
//     if (curVal < val) {
//       min = mid + 1;
//     } else {
//       max = mid - 1;
//     }
//   }
//   return null;
// }

function binarySearchRecursive(arr, val, low, high) {
  let min = low || 0;
  let max = high || arr.length - 1;
  let mid = Math.floor((min + max) / 2);

  // base
  if (arr[mid] === val) {
    return mid;
  } else if (max < min) {
    return null;
  }

  // recursive
  if (arr[mid] > val) {
    return binarySearchRecursive(arr, val, min, mid - 1);
  } else if (arr[mid] < val) {
    return binarySearchRecursive(arr, val, mid + 1, max);
  }
}

const array442 = [0, 1, 2, 5, 7, 33, 44, 55];
// const array442 = [1, 4, 5, 6, 56, 66, 789, 12131];

// console.log(binarySearchRecursive(array442, 5));

function quicksort2(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];

  const less = arr.filter(val => val < pivot);
  const mid = arr.filter(val => val === pivot);
  const more = arr.filter(val => val > pivot);

  return [...quicksort2(less), ...mid, ...quicksort2(more)];
}
// function quicksort2(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const lArr = [];
//   const cArr = [];
//   const rArr = [];
//   const pivot = arr[0];

//   arr.forEach(val => {
//     if (val === pivot) {
//       cArr.push(val);
//     } else if (val < pivot) {
//       lArr.push(val);
//     } else if (val > pivot) {
//       rArr.push(val);
//     }
//   });

//   return [...quicksort2(lArr), pivot, ...quicksort2(rArr)];
// }

const qs21Arr = [3, 66];
const qs22Arr = [3, 3, 3, 66, 44, 32, 1, 333, 42, 14, 67];

// console.log(quicksort2(qs21Arr));
// console.log(quicksort2(qs22Arr));
